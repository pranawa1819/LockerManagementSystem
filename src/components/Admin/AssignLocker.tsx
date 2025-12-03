import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

function AssignLocker() {
  return (
    <>
      <div className="w-full  flex flex-col md:p-8 gap-8">
        <div className="flex gap-3 items-center">
          <MdOutlineAssignmentTurnedIn className="md:text-[24px]" />
          <div className="md:text-[24px]">Assign Locker</div>
        </div>
      </div>
    </>
  );
}

export default AssignLocker;
