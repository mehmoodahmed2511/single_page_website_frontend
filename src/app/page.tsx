

export default function Home() {
    return (
        <div>
            <div id="part1" className="flex items-center">
                <div id="left">
                    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Hi, I am John,</h1>
                    <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.</p>
                    <br />
                    <button id="download-btn" className="px-7 py-2 bg-red-400 text-white">Download Resume</button>
                </div>
                <div id="right">
                    <img src="/man.png" alt="" />
                </div>
            </div>

            <div id="part2">
                <div>
                    <h1 className="text-xl font-semibold mb-6 color-red-400">Recent Post</h1>
                    <div id="box">
                        <h1 className="text-2xl font-bold">Making a design system from scratch</h1>
                        <pre><p className="font-sans my-7">12 Feb 2020  |  Design , Pattern</p></pre>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat duis enim
                            velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-end">
                    <h1 id="view-all" className="text-xl font-semibold mb-6 text-red-400">View All</h1>
                    <div id="box">
                        <h1 className="text-2xl font-bold">Making a design system from scratch</h1>
                        <pre><p className="font-sans my-7">12 Feb 2020  |  Design , Pattern</p></pre>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat duis enim
                            velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.</p>
                    </div>
                </div>
            </div>

            <div id="part3" className="px-48 py-16">
                <h1 id="featured-works" className="text-2xl font-semibold mb-8">Featured Works</h1>
                <div id="feature1" className="flex gap-5 mb-28">
                    <img src="/feature1.png" className="rounded-lg" alt="" />
                    <div id="right">
                        <h1 className="text-3xl font-bold">Designing Dashboards</h1>
                        <div id="year-div" className="flex justify-start items-center gap-5  my-4">
                            <button className="px-3 py-0.2 cursor-default text-md text-white font-bold rounded-2xl bg-red-400">2020</button>
                            <p className="text-xl text-gray-600">Dashboard</p>
                        </div>
                        <p className="text-lg text-gray-600 pr-12">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.</p>
                    </div>
                </div>

                <div id="feature2" className="flex gap-5 mb-28">
                    <img src="/feature2.png" className="rounded-lg" alt="" />
                    <div id="right">
                        <h1 className="text-3xl font-bold">Designing Dashboards</h1>
                        <div id="year-div" className="flex justify-start items-center gap-5  my-4">
                            <button className="px-3 py-0.2 cursor-default text-md text-white font-bold rounded-2xl bg-red-400">2020</button>
                            <p className="text-xl text-gray-600">Dashboard</p>
                        </div>
                        <p className="text-lg text-gray-600 pr-12">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.</p>
                    </div>
                </div>

                <div id="feature3" className="flex gap-5">
                    <img src="/feature3.png" className="rounded-lg" alt="" />
                    <div id="right">
                        <h1 className="text-3xl font-bold">Designing Dashboards</h1>
                        <div id="year-div" className="flex justify-start items-center gap-5  my-4">
                            <button className="px-3 py-0.2 cursor-default text-md text-white font-bold rounded-2xl bg-red-400">2020</button>
                            <p className="text-xl text-gray-600">Dashboard</p>
                        </div>
                        <p className="text-lg text-gray-600 pr-12">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                            nostrud amet.</p>
                    </div>
                </div>

                <div id="bottombar">
                    <div id="logos" className="flex justify-center gap-12 mb-8 mt-48">
                        <img src="/facebook.png" alt="" />
                        <img src="instagram.png" alt="" />
                        <img src="twitter.png" alt="" />
                        <img src="linkedin.png" alt="" />
                    </div>
                    <p className="text-center text-xl font-bold">Copyright ©2020 All rights reserved </p>
                </div>
            </div>


        </div>

    )
}