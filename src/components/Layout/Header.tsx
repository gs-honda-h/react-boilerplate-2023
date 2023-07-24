import reactLogo from '@/assets/react.svg';

export const Header = () => {
  return (
    <header className="py-4 px-4 border-b border-slate-900/10">
      <div className="flex flex-row items-center">
        <img src={reactLogo} alt="React logo" />
        <div className="ml-4 text-xl font-bold">Sample App</div>
      </div>
    </header>
  );
};
