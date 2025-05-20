const OFFSETS = [
  { left: 80, delay: 0.125 },
  { left: 70, delay: 0.3 },
  { left: 60, delay: 0.425 },
  { left: 50, delay: 0.54 },
  { left: 40, delay: 0.665 },
  { left: 30, delay: 0.79 },
  { left: 20, delay: 0.915 },
  { left: 10, delay: 1 },
];

export default function DominoSpinner() {
  return (
    <div className="relative -ml-[75px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%]">
      {OFFSETS.map(({ left, delay }, index) => (
        <span
          key={index}
          className="absolute top-1/2 h-[7px] w-[35px] origin-center animate-dominos bg-nero shadow-[2px_2px_3px_0px_#ffedd4] dark:bg-honiedwhite dark:shadow-[2px_2px_3px_0px_#292524]"
          style={{
            left: `${left}px`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}
