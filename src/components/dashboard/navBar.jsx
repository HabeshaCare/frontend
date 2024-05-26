const NavBar = () => {
  return (
    <>
      <div className="flex justify-between h-16 bg-[#1F555D]">
        <div>
          <div className="text-white mx-10 my-4 text-xl font-serif">Logo</div>
        </div>
        <div className="flex text-white gap-10 mr-20 my-4 text-lg">
          <div className="flex gap-3">
            <a href="/">Home</a>
          </div>
          <div className="flex gap-3">
            <a href="#">Contact Us</a>
          </div>
          <div className="flex gap-3">
            <a href="/register">Sign Up</a>
          </div>
          <div className="flex gap-3">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
