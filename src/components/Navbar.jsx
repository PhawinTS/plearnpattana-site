export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-6 py-4">

        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkedoASJUfKAYxzocsPYcGBysOdKd6hN0xTvdWnD1RsTHD-whKiB9gZLxadygBKsss-1Wsh6YIjujUYks-Mo8zofYRnQRAHKrknp5-vbIp8nyDHyOP7aI1NJ8l-mVEmtm1RylRWS3w80NsA1Wh_XcJSilEVGA2WmO9a99idwThs8Unn1sLdu93Fj=w16383"
            alt="โลโก้"
            className="w-12 h-12 object-contain"
          />

          <div className="text-2xl font-semibold">
            ภูมิฯไทย เพลินพัฒนา
          </div>
        </a>

        {/* ขวา: เมนู */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-700 hover:text-blue-600">หน้าแรก</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">เกี่ยวกับ</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">กิจกรรม</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">ติดต่อ</a>
        </div>

      </div>
    </nav>
  );
}
