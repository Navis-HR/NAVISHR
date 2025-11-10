import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Thank you message"
        >
          <motion.div
            className="relative w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl shadow-[#d53d3d]/40 sm:p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffe1db] text-[#d53d3d]">
              <FiCheckCircle className="text-3xl" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900">
              Thank You!
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We appreciate you getting in touch. One of our team members will
              reach out to you soon.
            </p>
            <motion.button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#d53d3d] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#d53d3d]/30 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d53d3d]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;
