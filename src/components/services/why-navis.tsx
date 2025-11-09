import React from "react";
import { CheckCircle } from "lucide-react";

const WhyNavis: React.FC = () => {
  return (
    <div>
      {" "}
      {/* Why NAVIS HR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose NAVIS HR?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Our Unique Strengths & Ecosystem
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    23 Years of Expertise
                  </h3>
                  <p className="text-gray-700">
                    Active since the early 2000s with institutional maturity to
                    deliver reliable outcomes in the Indian-Japanese talent
                    corridor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    End-to-End Service Model
                  </h3>
                  <p className="text-gray-700">
                    Complete one-stop service from recruitment → training → visa
                    → deployment → post-departure support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Accredited Sending Agency
                  </h3>
                  <p className="text-gray-700">
                    Operating under TITP and SSW schemes, aligned with
                    India-Japan bilateral frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-500 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Native Japanese Instructors
                  </h3>
                  <p className="text-gray-700">
                    All instructors are native Japanese speakers delivering
                    fast-track results with immersive training methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyNavis;
