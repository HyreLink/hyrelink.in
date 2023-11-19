"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Career = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div>
        <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
        <br />
        <div className="formbold-builder-form themeOne">
          <form
            encType="multipart/form-data"
            action="https://formbold.com/s/6r0ng"
            method="POST"
            className="themeOne mx-auto w-full rounded-[10px] border border-stroke bg-white p-10"
          >
            <div className="SortableItem fb-builder-item">
              <h3 className="static text-xl  font-semibold leading-tight text-black sm:text-[28px]">
                Career
              </h3>
            </div>
            <div className="SortableItem fb-builder-item">
              <p className="text-body-color static text-base">
                Join us at HyreLink and embark on a rewarding career journey
                where innovation, collaboration, and personal growth converge to
                shape a future of limitless possibilities
              </p>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Enter Name</span>
                  <span className="label-required pl-1 text-red-400"></span>
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="text_input_CE79D16B-9C99-4084-8805-F4D010843B52"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>E-Mail</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="email_input_5BE3D50D-A699-4819-AECE-DF9DB6CD4E4D"
                  placeholder="Enter Email Address"                 
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Phone Number</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="phone_input_8EE23895-3352-428B-AA0A-DF4E81FAD9D1"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="form-label mb-4 text-base text-black">
                  <span>Join As</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <div className="custom-control custom-radio mb-2.5 last:mb-0">
                  <input
                    id="fid_preview_radiobuttons_option_7C3B801A-5E8A-4EE3-AA73-99E54AC9B208"
                    className="custom-control-input fb-builder-radio sr-only"
                    name="radiobuttons_A1AB11B5-338D-4A93-8C98-5F4612183BC7"
                    type="radio"
                  />
                  <label
                    className="custom-control-label relative flex cursor-pointer text-base text-black"
                    // for="fid_preview_radiobuttons_option_7C3B801A-5E8A-4EE3-AA73-99E54AC9B208"
                  >
                    <span className="relative mr-2.5 mt-0.5 block h-[18px] w-[18px] rounded-full border border-stroke">
                      <span className="absolute left-0 top-0 h-full w-full rounded-full border-4 border-primary opacity-0"></span>
                    </span>
                    Employee
                  </label>
                </div>
                <div className="custom-control custom-radio mb-2.5 last:mb-0">
                  <input
                    id="fid_preview_radiobuttons_option_17B20EF2-6DC6-4C5B-811C-D0F54EC77773"
                    className="custom-control-input fb-builder-radio sr-only"
                    name="radiobuttons_A1AB11B5-338D-4A93-8C98-5F4612183BC7"
                    type="radio"
                  />
                  <label
                    className="custom-control-label relative flex cursor-pointer text-base text-black"
                    // for="fid_preview_radiobuttons_option_17B20EF2-6DC6-4C5B-811C-D0F54EC77773"
                  >
                    <span className="relative mr-2.5 mt-0.5 block h-[18px] w-[18px] rounded-full border border-stroke">
                      <span className="absolute left-0 top-0 h-full w-full rounded-full border-4 border-primary opacity-0"></span>
                    </span>
                    Intern
                  </label>
                </div>
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Attach CV/Resume</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <div className="image-upload-container">
                  <div>
                    <input
                      name="file_attachment_A696EC87-0AE6-4A1A-A16A-BE5519D19830"
                      type="file"
                      accept="*"
                      className="text-body-color w-full rounded border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[.5px] file:border-stroke file:bg-[#EEEEEE] file:px-[10px] file:py-1 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Tell us more about yourself</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <textarea
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="text_area_8291ECF1-A40D-4810-BC9B-618FD922F9E4"
                  placeholder="Tell us"
                ></textarea>
              </div>
            </div>
            <div className="btn-toolbar flex items-center space-x-3">
              <input
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
                value="Submit"
              />
            </div>
          </form>
          <p className="mt-8 flex items-center justify-center">
            Powered by
            <span className="pl-2">
              <a
                href="https://formbold.com"
                rel="nofollow noopener"
                target="_blank"
              >
                <img
                  src="https://cdn.formbold.com/formbold-logo.svg"
                  alt="Formbold Logo"
                  
                />
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
