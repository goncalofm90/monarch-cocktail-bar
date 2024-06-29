import React, { Component } from "react";

export default function Contact() {
  return (
    <div className="bg-monarch-blue lg:flex justify-center h-lvh flex items-center">
      <div className="relative isolate px-6 pt-14 lg:px-8 text-white">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight sm:text-6xl uppercase">
              Get in touch.
            </h1>
            <p className="mt-6 text-lg leading-8 uppercase"></p>
            <p className="text-xs">
              Rua da Boavista 10, Lisbon, Portugal 1200-067
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                E-mail
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Book a table <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
