import { useEffect, useRef } from "react";
import { Book } from "../../store/types";
import Image from "next/image";
import { MainComponent } from "./MainStyles";
import { BsSearch } from "react-icons/bs";

type MainProps = {
  searchBooks: (event: React.MouseEvent) => void;
  inputValue: string;
  setInputValue: (arg0: string) => void;
  books: Book[];
};

export function Main({
  searchBooks,
  inputValue,
  setInputValue,
  books,
}: MainProps) {

  const scrollSpan = useRef(null);

  useEffect(() => {
    scrollSpan.current.scrollIntoView({ behavior: "smooth" });
  }, [books]);

  return (
    <>
      <MainComponent>
        <section className="searchSection">
          <h1>What book are you looking for?</h1>
          <p>Not sure what to read next?</p>
          <p>
            Explore thousands of books and save them on your bookshelf to
            organize your readings!
          </p>
          <form>
            <input
              type="text"
              placeholder="Search for books..."
              className="searchBooksInput"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
            <button type="submit" onClick={(event) => searchBooks(event)}>
              <BsSearch />
            </button>
          </form>
        </section>
        <div className="img">
          <Image src="/images/image.svg" alt="Books" layout="fill" priority />
        </div>
        <span ref={scrollSpan}></span>
      </MainComponent>
    </>
  );
}
