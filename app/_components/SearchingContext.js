"use client";

const {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} = require("react");

const SearchingContext = createContext();

const initialState = [];

function SearchingProvider({ children, cards }) {
  const [cardList, setCardList] = useState(cards);
  const [currentCardList, setCurrentCardList] = useState(cards);

  const searchCardList = useCallback(
    (search) => {
      setCurrentCardList((cardList) =>
        cards.filter(
          (card) => card.note.includes(search) || card.title.includes(search)
        )
      );
    },
    [setCurrentCardList, cards]
  );
  return (
    <SearchingContext.Provider
      value={{ searchCardList, setCardList, cardList, currentCardList }}
    >
      {children}
    </SearchingContext.Provider>
  );
}

function useSearching() {
  const context = useContext(SearchingContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}
export { SearchingProvider, useSearching };
