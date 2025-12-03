import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
function ManageAssignLocker() {
  const [records] = useState(
    JSON.parse(localStorage.getItem("kycFormData") as string) || {}
  );
  console.log(records)
  return (
    <>
      <div className="w-full  flex flex-col md:p-8 gap-8">
        <div className="flex gap-3 items-center">
          <MdOutlineAssignmentTurnedIn className="md:text-[24px]" />
          <div className="md:text-[24px]">Manage Assign Locker</div>
        </div>
        <div>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Size</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Account Number</th>
                <th className="border p-2">Bank Name</th>
                <th className="border p-2">Branch</th>
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Marital Status</th>
                <th className="border p-2">Nationality</th>
                <th className="border p-2">Province</th>
                <th className="border p-2">District</th>
                <th className="border p-2">Municipality</th>
                <th className="border p-2">Tole</th>
                <th className="border p-2">Ward Number</th>
                <th className="border p-2">Date of bith</th>
                <th className="border p-2">Occupation</th>
                <th className="border p-2">Annual Salary</th>
                <th className="border p-2">Photo</th>
                <th className="border p-2">Citizenship front</th>
                <th className="border p-2">Citizenship back</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2 text-center">{records.size}</td>
                <td className="border p-2 text-center">
                  {records.reversedDate}
                </td>
                <td className="border p-2 text-center">{records.accountNumber}</td>
                <td className="border p-2 text-center">{records.bankName}</td>
                <td className="border p-2 text-center">{records.branch}</td>
                <td className="border p-2 text-center">{records.fullName}</td>
                <td className="border p-2 text-center">{records.phoneNumber}</td>
                <td className="border p-2 text-center">{records.email}</td>
                <td className="border p-2 text-center">{records.maritalStatus}</td>
                <td className="border p-2 text-center">{records.nationality}</td>
                <td className="border p-2 text-center">{records.province}</td>
                <td className="border p-2 text-center">{records.district}</td>
                <td className="border p-2 text-center">{records.municipality}</td>
                <td className="border p-2 text-center">{records.tole}</td>
                <td className="border p-2 text-center">{records.dateOfBirth}</td>
                <td className="border p-2 text-center">{records.occupation}</td>
                <td className="border p-2 text-center">{records.annualSalary}</td>
                {/* <td className="border p-2 text-center">{records.photo}</td> */}
                {/* <td className="border p-2 text-center">{records.citizenshipFront}</td> */}
                {/* <td className="border p-2 text-center">{records.citizenshipBack}</td> */}

                <td className="border p-2">
                  <div className="flex gap-3 justify-center items-center">
                    <FaEdit className="text-blue-400 text-[24px]" />
                    <MdDelete className="text-red-400 text-[24px]" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageAssignLocker;
