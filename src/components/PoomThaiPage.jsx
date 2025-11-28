export default function PoomThaiPage() {
    return (
        <>
            <section
                className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden mt-16"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/sitesv/AAzXCkfRq_1dER5E2hDv-o5FpiC56ifG3KdN3R08V2HRIdRxeK67aTHx3hQgXZbHKluM85GCKwEkkvAUny25RQ6nqP7IHIo_rTRO9mJwudnlcLUeWtSBcYxQspo1ZjhaEonIV-6jkjc6Lr49_3z3lpbPu3gIbWO8jnvbjHRb24TKL7OMJ-Vq2TeH2WdE=w16383')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative px-6 md:px-12 z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white drop-shadow-2xl">
                        คลังสมบัติการเรียนรู้
                    </h1>
                </div>

                <div className="absolute bottom-10 animate-bounce text-white z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-sm md:text-base mb-2">เลื่อนลงเพื่อดูเพิ่มเติม</span>
                        <div className="text-3xl">↓</div>
                    </div>
                </div>
            </section>

            {/* จุดมุ่งหมาย Section */}
            <section className="w-full bg-green-600 text-white px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        <span className="text-red-700 px-4 py-2 underline rounded inline-block">
                            จุดมุ่งหมายสูงสุด
                        </span>
                        <span className="text-red-700 px-4 py-2 rounded inline-block">
                            🫰🏻
                        </span>
                    </h2>
                    <ol className="space-y-4 text-lg md:text-xl text-black">
                        <li className="flex items-start">
                            <span className="font-bold mr-3 ">๑.</span>
                            <span>นักเรียนสามารถจัดการความรู้ได้ด้วยตนเอง มีการเก็บเกี่ยวความรู้ไปใช้ได้อย่างดี</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold mr-3">๒.</span>
                            <span>นักเรียนใช้ประโยชน์สูงสุด เพื่อให้ก่อเกิดการเรียนรู้</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold mr-3">๓.</span>
                            <span>ฝึกฝนทักษะสำคัญ เช่น ทักษะการสืบค้น ทักษะการอ่าน</span>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="w-full bg-gradient-to-b from-sky-300 to-sky-100 px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
                        สวัสดีครับ ครูยูเอง
                    </h2>
                </div>
            </section>

            {/* Bottom Image Section */}
            <section
                className="w-full relative h-64 md:h-80 flex items-center"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/sitesv/AAzXCkccW9EbMefRy2BizXoXfQGjj_-h2QID7pqsVCksTp4MBDC7MmHhdyvatPnOKd-wb6UnEvOEibwwUjf2M24FooRRgSSKvRM2TiNexJN-NBzpyVRVDruhaZGK5MMQKFkGXvpO_TZHo2ZO_WLzzwSfZEaVdsXaF5yYOpi-0-bwyj1sY0ge1DBK-2IN=w16383')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay แบบ gradient ซ้ายไปขวา */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent"></div>

                <div className="relative z-10 w-full px-6 md:px-12 flex items-center justify-between">
                    {/* สารบัญเว็บไซต์ - ฝั่งซ้าย */}
                    <div>
                        <h3 className="text-red-600 text-xl md:text-2xl font-bold mb-3">
                            สารบัญเว็บไซต์
                        </h3>
                        <div className="space-y-1 text-gray-900 text-base md:text-lg font-medium">
                            <a href="#" className="block hover:text-red-600 hover:underline transition-colors">
                                ประเภทของคำ
                            </a>
                            <a href="#" className="block hover:text-red-600 hover:underline transition-colors">
                                วรรณคดีของชั้น ๔
                            </a>
                            <a href="#" className="block hover:text-red-600 hover:underline transition-colors">
                                คลังคำ
                            </a>
                            <a href="#" className="block hover:text-red-600 hover:underline transition-colors">
                                จักรวาลผ่าขอ
                            </a>
                        </div>
                    </div>

                    {/* คำแนะนำ - ฝั่งขวา */}
                    <div className="hidden md:block text-right mr-8">
                        <p className="text-green-700 text-base md:text-lg font-normal leading-relaxed">
                            เพื่อเข้าชมเนื้อหา ทุกคนสามารถกดที่ชื่อเรื่องได้เลยนะ
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
