import React, { useEffect, useState, useRef } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Award,
  ChevronDown,
  Check,
  GraduationCap,
  Mars,
  Venus,
  CircleSlash,
} from "lucide-react";
import ThankYouModal from "../thankyou/thank-you";

export type EnquiryFormValues = {
  name: string;
  phone_no: string;
  whatsapp_no: string;
  mail: string;
  gender: string;
  age: string;
  state: string;
  education: string;
  otherEducation: string;
  experience: string;
  websitePage: string;
};

type SubmissionStatus = "idle" | "success" | "error";

const genderOptions = ["Male", "Female", "Prefer not to say"];

const genderIconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Male: Mars,
  Female: Venus,
  "Prefer not to say": CircleSlash,
};

const educationOptions = [
  "ANM (1 YEAR)",
  "ANM (2 YEARS)",
  "B.Sc. (Nursing)",
  "GNM",
  "DIPLOMA IN HEALTH SERVICE / NURSING ASSISTANT",
  "VOCATIONAL CAREGIVER OR GERIATRIC CARE TRAINING (MINIMUM 6 MONTHS)",
  "BEDSIDE ASSISTANCE COURSE",
  "HEALTHCARE ASSISTANT PROGRAM",
  "Other",
];

const experienceOptions = [
  "Fresher",
  "0 - 1 year",
  "1 - 3 years",
  "3 - 5 years",
  "5+ years",
];

const indiaStatesAndUTs = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  icon: Icon,
  optionIcon: OptionIcon,
  getOptionIcon,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  optionIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  getOptionIcon?: (
    option: string
  ) => React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 bg-linear-to-r from-white to-gray-50/50 cursor-pointer ${
          isOpen
            ? "border-red-500 shadow-lg shadow-red-100 from-red-50/30 to-white"
            : "border-gray-200 hover:border-red-300 hover:shadow-md"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="pl-4 pr-3">
          <Icon
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? "text-red-600" : "text-gray-400"
            }`}
          />
        </div>
        <div className="w-full py-3.5 pr-10 text-gray-900 font-medium">
          {value || <span className="text-gray-400">{placeholder}</span>}
        </div>
        <div
          className={`absolute right-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl border-2 border-red-200 shadow-2xl shadow-red-100 overflow-hidden">
          {/* Search box for large lists */}
          {options.length > 7 && (
            <div className="p-3 border-b border-gray-200 bg-linear-to-r from-red-50 to-white">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Options list */}
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const DynamicIcon =
                  (getOptionIcon && getOptionIcon(option)) || OptionIcon;

                return (
                  <div
                    key={option}
                    className={`px-4 py-3 cursor-pointer transition-all duration-200 flex items-center justify-between group ${
                      value === option
                        ? "bg-red-50 text-red-700 font-semibold"
                        : "hover:bg-linear-to-r hover:from-red-50 hover:to-transparent text-gray-700"
                    }`}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {DynamicIcon && (
                        <DynamicIcon
                          className={`w-5 h-5 transition-colors duration-200 ${
                            value === option ? "text-red-600" : "text-red-400"
                          }`}
                        />
                      )}
                      <span className="flex-1">{option}</span>
                    </div>
                    {value === option && (
                      <Check className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-8 text-center text-gray-400">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface EnquiryFormProps {
  onSubmit?: (values: EnquiryFormValues) => Promise<void> | void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSubmit }) => {
  const [selectedEducationOption, setSelectedEducationOption] =
    useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<EnquiryFormValues>({
    name: "",
    phone_no: "",
    whatsapp_no: "",
    mail: "",
    gender: "",
    age: "",
    state: "",
    education: "",
    otherEducation: "",
    experience: "",
    websitePage: "",
  });

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>("");
  const [isThankYouOpen, setIsThankYouOpen] = useState<boolean>(false);

  const resetSubmissionStatus = () => {
    if (submissionStatus === "error") {
      setSubmissionStatus("idle");
      setStatusMessage("");
    }
  };

  const handleFieldChange =
    (field: keyof EnquiryFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      resetSubmissionStatus();

      setFormValues((prev) => ({ ...prev, [field]: value }));
    };

  const handleDropdownChange =
    (field: keyof EnquiryFormValues) => (value: string) => {
      resetSubmissionStatus();
      setFormValues((prev) => ({ ...prev, [field]: value }));
    };

  const validateForm = () => {
    const requiredFields: Array<keyof EnquiryFormValues> = [
      "name",
      "phone_no",
      "whatsapp_no",
      "mail",
      "gender",
      "age",
      "state",
      "experience",
    ];

    const hasMissingRequiredField = requiredFields.some(
      (field) => !formValues[field]?.trim()
    );

    if (hasMissingRequiredField) {
      return false;
    }

    if (selectedEducationOption === "Other") {
      return Boolean(formValues.otherEducation.trim());
    }

    return Boolean(formValues.education.trim());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmissionStatus("error");
      setStatusMessage(
        "Please fill out all required fields before submitting."
      );
      return;
    }

    setIsSubmitting(true);

    const normalizedValues: EnquiryFormValues = {
      ...formValues,
      education:
        selectedEducationOption === "Other"
          ? formValues.otherEducation.trim()
          : formValues.education.trim(),
      otherEducation: formValues.otherEducation.trim(),
      name: formValues.name.trim(),
      phone_no: formValues.phone_no.trim(),
      whatsapp_no: formValues.whatsapp_no.trim(),
      mail: formValues.mail.trim(),
      age: formValues.age.trim(),
      state: formValues.state.trim(),
      experience: formValues.experience.trim(),
      websitePage: formValues.websitePage.trim(),
    };

    try {
      if (onSubmit) {
        await onSubmit(normalizedValues);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmissionStatus("success");
      setStatusMessage(
        "Thanks for reaching out! Your details have been submitted successfully."
      );
      setIsThankYouOpen(true);

      setTimeout(() => {
        setFormValues({
          name: "",
          phone_no: "",
          whatsapp_no: "",
          mail: "",
          gender: "",
          age: "",
          state: "",
          education: "",
          otherEducation: "",
          experience: "",
          websitePage: "",
        });
        setSelectedEducationOption("");
        setSubmissionStatus("idle");
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      console.error("Enquiry form submission failed:", error);
      setSubmissionStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your enquiry right now. Please try again shortly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ef4444;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #dc2626;
          }
        `}</style>

        <div className="max-w-4xl mx-auto">
          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-red-100 p-6 sm:p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3">
                Enquiry Form
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <div
                  className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
                    focusedField === "name"
                      ? "border-red-500 shadow-lg shadow-red-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="pl-4 pr-3">
                    <User
                      className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === "name"
                          ? "text-red-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full py-3.5 pr-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    required
                    value={formValues.name}
                    onChange={handleFieldChange("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Primary Phone <span className="text-red-600">*</span>
                  </label>
                  <div
                    className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
                      focusedField === "phone_no"
                        ? "border-red-500 shadow-lg shadow-red-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="pl-4 pr-3">
                      <Phone
                        className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === "phone_no"
                            ? "text-red-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      className="w-full py-3.5 pr-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      required
                      value={formValues.phone_no}
                      onChange={handleFieldChange("phone_no")}
                      onFocus={() => setFocusedField("phone_no")}
                      onBlur={() => setFocusedField("")}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                      }}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    WhatsApp Number <span className="text-red-600">*</span>
                  </label>
                  <div
                    className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
                      focusedField === "whatsapp_no"
                        ? "border-red-500 shadow-lg shadow-red-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="pl-4 pr-3">
                      <Phone
                        className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === "whatsapp_no"
                            ? "text-red-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      className="w-full py-3.5 pr-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      required
                      value={formValues.whatsapp_no}
                      onChange={handleFieldChange("whatsapp_no")}
                      onFocus={() => setFocusedField("whatsapp_no")}
                      onBlur={() => setFocusedField("")}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .replace(/\D/g, "")
                          .slice(0, 10);
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <div
                  className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
                    focusedField === "mail"
                      ? "border-red-500 shadow-lg shadow-red-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="pl-4 pr-3">
                    <Mail
                      className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === "mail"
                          ? "text-red-600"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full py-3.5 pr-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    required
                    value={formValues.mail}
                    onChange={handleFieldChange("mail")}
                    onFocus={() => setFocusedField("mail")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>
              </div>

              {/* Gender and Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <CustomDropdown
                    options={genderOptions}
                    value={formValues.gender}
                    onChange={handleDropdownChange("gender")}
                    placeholder="Select gender"
                    icon={User}
                    getOptionIcon={(option) => genderIconMap[option] || User}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Age <span className="text-red-600">*</span>
                  </label>
                  <div
                    className={`relative flex items-center rounded-2xl border-2 transition-all duration-300 ${
                      focusedField === "age"
                        ? "border-red-500 shadow-lg shadow-red-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="pl-4 pr-3">
                      <Award
                        className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === "age"
                            ? "text-red-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <input
                      type="number"
                      min={18}
                      max={70}
                      placeholder="Enter your age"
                      className="w-full py-3.5 pr-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      required
                      value={formValues.age}
                      onChange={handleFieldChange("age")}
                      onFocus={() => setFocusedField("age")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>
              </div>

              {/* State and Education */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    State<span className="text-red-600">*</span>
                  </label>
                  <CustomDropdown
                    options={indiaStatesAndUTs}
                    value={formValues.state}
                    onChange={handleDropdownChange("state")}
                    placeholder="Select state"
                    icon={MapPin}
                    optionIcon={MapPin}
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Education <span className="text-red-600">*</span>
                  </label>
                  <CustomDropdown
                    options={educationOptions}
                    value={
                      selectedEducationOption === "Other"
                        ? formValues.otherEducation || "Other"
                        : formValues.education
                    }
                    onChange={(value) => {
                      resetSubmissionStatus();
                      setSelectedEducationOption(value);
                      setFormValues((prev) => ({
                        ...prev,
                        education: value === "Other" ? "" : value,
                        otherEducation:
                          value === "Other" ? prev.otherEducation : "",
                      }));
                    }}
                    placeholder="Select your highest education"
                    icon={GraduationCap}
                    optionIcon={GraduationCap}
                  />
                </div>
                {selectedEducationOption === "Other" && (
                  <div className="group sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                      Please specify your education
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your education"
                      className="w-full py-3.5 px-4 bg-transparent border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-red-500"
                      required
                      value={formValues.otherEducation}
                      onChange={(event) => {
                        resetSubmissionStatus();
                        const { value } = event.target;
                        setFormValues((prev) => ({
                          ...prev,
                          otherEducation: value,
                          education: value,
                        }));
                      }}
                      onFocus={() => setFocusedField("otherEducation")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                )}
              </div>

              {/* Experience */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Total Experience <span className="text-red-600">*</span>
                </label>
                <CustomDropdown
                  options={experienceOptions}
                  value={formValues.experience}
                  onChange={handleDropdownChange("experience")}
                  placeholder="Select experience"
                  icon={Award}
                />
              </div>

              {/* Status Message */}
              {submissionStatus !== "idle" && (
                <div
                  className={`rounded-2xl px-5 py-4 text-sm font-medium ${
                    submissionStatus === "success"
                      ? "bg-green-50 border-2 border-green-200 text-green-800"
                      : "bg-red-50 border-2 border-red-200 text-red-800"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-4 px-6 rounded-2xl bg-linear-to-r from-red-600 to-red-700 text-white font-semibold text-base shadow-xl shadow-red-200 hover:shadow-2xl hover:shadow-red-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Details"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />
    </>
  );
};

export default EnquiryForm;
