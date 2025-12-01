import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
function KycForm() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center ">
        <div>KYC Form</div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/personal-details">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/address-details">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/document-details">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default KycForm;
