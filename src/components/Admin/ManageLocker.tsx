import { useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function ManageLocker() {
  const [records] = useState(
    JSON.parse(localStorage.getItem("Locker Type:") as string) || null
  );

  return (
    <>
      <div className="w-full  flex flex-col md:p-8 gap-8">
        <div className="flex gap-3 items-center">
          <MdManageAccounts className="md:text-[24px]" />
          <div className="md:text-[24px]">Manage Locker</div>
        </div>
        <div>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Size</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {!records ? (
                <tr>
                  <td colSpan={3} className="text-center p-3">
                    No locker types found
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="border p-2 text-center">
                    {records.lockersize}
                  </td>
                  <td className="border p-2 text-center">{records.price}</td>
                  <div className="flex gap-2.5 justify-center items-center mt-1 mb-1">
                    <td className="border p-2 text-center">
                      <FaEdit className="text-blue-400 text-[24px]" />
                    </td>
                    <td className="border p-2 text-center">
                      <MdDelete className="text-red-400 text-[24px]" />
                    </td>
                  </div>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageLocker;
