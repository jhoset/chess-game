export enum Color {
  White,
  Black
}

export type Coords = {
  x: number;
  y: number;
}

export enum FENChar {
  WhitePawn = "P", //* ♙
  WhiteKnight = "N", //* ♘
  WhiteBishop = "B", //* ♗
  WhiteRook = "R",  //* ♖
  WhiteQueen = "Q", //* ♕
  WhiteKing = "K", //* ♔
}
