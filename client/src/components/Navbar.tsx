import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowUpRightIcon,
  BikeIcon,
  ChevronDown,
  LogOutIcon,
  MapPinIcon,
  MenuIcon,
  PackageIcon,
  SearchIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

const Navbar = () => {
  const user = { name: "John Doe", email: "john.doe@example.com", isAdmin: true }; 

  const { cartCount, setCartOpen } = {
    cartCount: 5,
    setCartOpen: (_data : unknown) => {},
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-[22px] font-medium shrink-0">
          <BikeIcon size={24} /> Grocify
        </Link>

        <div className="w-full flex items-center justify-end gap-4 lg:gap-10">

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/deals" className="text-app-orange">Deals</Link>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-sm text-xs sm:text-sm">
            <div className="relative w-full">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search for groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30 focus:outline-none"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Cart Icon */}
            <button className="relative p-2 rounded-xl" onClick={() => setCartOpen(true)}>
              <ShoppingCartIcon className="size-5 text-zinc-900" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 size-4 bg-app-orange text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Avatar (logged in) */}
            {user && (
              <div className="relative">
                <button
                  className="flex items-center gap-2 p-2"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                >
                  <div className="size-7 rounded-full bg-green-950 text-white flex items-center justify-center text-xs font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className="size-3 text-zinc-500" />
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow-lg border border-app-border py-2 z-50 animate-fade-in">

                      {/* User Info */}
                      <div className="px-4 py-2 border-b border-app-border">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>

                      {/* Menu Items */}
                      <div onClick={() => setUserMenuOpen(false)}>
                        <Link to="/orders" className="dropdown-link">
                          <PackageIcon size={16} /> My Orders
                        </Link>
                        <Link to="/addresses" className="dropdown-link">
                          <MapPinIcon size={16} /> Addresses
                        </Link>
                        <Link to="/products" className="dropdown-link md:hidden">
                          <ArrowUpRightIcon size={16} /> Products
                        </Link>
                        <Link to="/deals" className="dropdown-link md:hidden">
                          <ArrowUpRightIcon size={16} /> Deals
                        </Link>
                        {user?.isAdmin && (
                          <Link to="/admin" className="dropdown-link">
                            <ShieldCheckIcon size={16} className="text-app-orange-dark" />
                            <span className="text-app-orange-dark">Admin Panel</span>
                          </Link>
                        )}
                      </div>

                      {/* Logout */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-app-error hover:bg-red-50 w-full transition-colors"
                      >
                        <LogOutIcon size={16} /> Logout
                      </button>

                    </div>
                  </>
                )}
              </div>
            )}

            {/* Sign In Link (logged out) - Desktop */}
            {!user && (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-950 rounded-full transition-colors"
              >
                <UserIcon size={16} /> Sign In
              </Link>
            )}

            {/* Mobile Menu Toggle — separate state from user dropdown */}
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-app-border bg-white px-4 py-3 flex flex-col gap-2 text-sm text-zinc-700">
          <Link to="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/deals" className="py-2 text-app-orange" onClick={() => setMobileMenuOpen(false)}>Deals</Link>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex sm:hidden mt-1">
            <div className="relative w-full">
              <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search for groceries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 p-2 bg-orange-50 rounded-full ring ring-app-orange/15 focus:ring-app-orange/30 focus:outline-none text-sm"
              />
            </div>
          </form>

          <div className="border-t border-app-border mt-1 pt-2 flex flex-col gap-1">
            {!user && (
              <Link
                to="/login"
                className="flex items-center gap-2 py-2 font-medium text-green-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserIcon size={16} /> Sign In
              </Link>
            )}
            {user && (
              <>
                <Link to="/orders" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                  <PackageIcon size={16} className="inline mr-2" /> My Orders
                </Link>
                <Link to="/addresses" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                  <MapPinIcon size={16} className="inline mr-2" /> Addresses
                </Link>
                {user?.isAdmin && (
                  <Link to="/admin" className="py-2 text-app-orange-dark" onClick={() => setMobileMenuOpen(false)}>
                    <ShieldCheckIcon size={16} className="inline mr-2" /> Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 py-2 text-app-error w-full text-left"
                >
                  <LogOutIcon size={16} /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;