import { SiGithub, SiLinkedin } from "react-icons/si";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyzpkoae"); // <- Twój Formspree ID
  if (state.succeeded) {
    return (
      <div className=" flex items-center justify-center text-center text-2xl font-semibold text-green-600">
        Thanks for your message!
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-gray-800">
      <div className="max-w-xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl mt-4 font-bold md:text-4xl md:leading-tight">
            Contact
          </h2>
        </div>
      </div>

      <div className="flex flex-col opacity-0 scale-95 intersect:opacity-100 intersect:scale-100 transition-all duration-700 max-w-3xl mx-auto">
        <div className="flex flex-col border w-full mb-6 border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="border border-gray-200 py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                disabled={state.submitting}
                className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6 lg:gap-12 mb-6 lg:mb-0 justify-center items-center text-center px-4">
          <h2 className="text-base sm:text-lg md:text-xl">
            I will be happy to talk about new opportunities for cooperation.
          </h2>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/maciej-wlosek/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl cursor-pointer hover:text-blue-600"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/kaciakk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl cursor-pointer hover:text-blue-600"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
