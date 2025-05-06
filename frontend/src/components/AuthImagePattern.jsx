const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 px-8 py-10 w-full">
      <div className="w-full max-w-sm text-center">
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-[16px] text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
