import React from "react";

function Resume() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl border border-gray-200">
      <div className="flex flex-col items-center">
        <img
          src="https://i.pinimg.com/736x/a2/4c/46/a24c460a714e5e84c14b528ed2f00bd6.jpg"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-xl"
        />
        <h2 className="text-3xl font-bold mt-4 text-gray-800">Christian King L. Cua</h2>
        <p className="text-gray-600 text-md italic">Passionate Web Developer | UI Enthusiast</p>
      </div>

      <div className="mt-4 border-t pt-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
        <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:christiankingcua@gmail.com" className="text-blue-600">christiankingcua@gmail.com</a></p>
        <p className="text-gray-600"><strong>Phone:</strong> 09919484478</p>
        <p className="text-gray-600"><strong>Address:</strong> Brgy 42 Rawis, Legazpi City</p>
      </div>

      <div className="border-t flex justify-center">
      <div className="align-items-center bg-white p-4">
        <h3 className="text-center text-xl font-bold text-gray-700">Skills</h3>
        <div className="justify-items-center">
        <ul className="text-left text-gray-600 list-disc list-inside text-center mt-4">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>CSS & Tailwind</li>
          <li>HTML</li>
          <li>Node.js</li>
        </ul>
        </div>
        </div>
      </div>

      <div className="border-t">
      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-700">Work Experience</h3>
        <div className="mt-4 bg-white-100 p-4 rounded-lg shadow-sm">
          <p className="text-gray-800 font-bold">Frontend Developer at Tech Corp</p>
          <p className="text-gray-600">Jan 2020 - Present</p>
          <p className="text-gray-600">Developing and maintaining the front end of the company website.</p>
        </div>
        <div className="mt-4 bg-white-100 p-4 rounded-lg shadow-sm">
          <p className="text-gray-800 font-bold">Web Developer at Web Solutions</p>
          <p className="text-gray-600">Jun 2018 - Dec 2019</p>
          <p className="text-gray-600">Worked on various web development projects for clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
