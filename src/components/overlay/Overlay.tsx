type OverlayProps = {
  closeOverlay: () => void;
};

export function Overlay({ closeOverlay }: OverlayProps) {
  return (
    <div
      onClick={closeOverlay}
      className="fixed inset-0 bg-black opacity-80 z-10 cursor-pointer"
    ></div>
  );
}
