import reactLogo from '@/assets/react.svg';

export const Header = () => {
  return (
    <header className="border-b border-slate-900/10 p-4">
      <div className="flex flex-row items-center">
        <img src={reactLogo} alt="React logo" />
        <div className="ml-4 text-xl font-bold">Sample App</div>
      </div>
    </header>
  );
};
