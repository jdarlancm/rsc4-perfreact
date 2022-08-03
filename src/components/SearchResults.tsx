import { List, ListRowRenderer } from 'react-virtualized';

import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>{totalPrice}</h1>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/*
useMemo: Usado para "memorizar" algo no react
1. Cálculos pesados
2. Igualdade referencial (quando repassa a informação a um componente filho):
   vai permitir que a informação igual fique no mesmo espaço de memoria

UseMemo memoriza um valor, o useCallback memoriza uma funcao
*/
