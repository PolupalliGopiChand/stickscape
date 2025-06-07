import { create } from 'zustand';

export const useStore = create((set) => ({
  stickers: [],
  addSticker: (sticker) =>
    set((state) => ({
      stickers: [...state.stickers, sticker],
    })),
  removeSticker: (index) =>
    set((state) => ({
      stickers: state.stickers.filter((_, i) => i !== index),
    })),
  updateStickerPosition: (index, position) =>
    set((state) => {
      const stickers = [...state.stickers];
      stickers[index] = { ...stickers[index], ...position };
      return { stickers };
    }),
}));
