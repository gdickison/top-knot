/* eslint-disable @next/next/no-img-element */
const colors = [
  'brown',
  'cream',
  'blue',
  'green',
  'dark-orange',
  'light-orange',
  'bg-light',
  'black'
]

export default function Home() {
  return (
    
    <main className="flex flex-col gap-12">
      <div>
        <div className="h1">3xl - Lorem ipsum dolor sit</div>
        <div className="h2">2xl - Lorem ipsum <a href="#">dolor sit</a>.</div>
        <div className="h3">xl - Lorem ipsum dolor sit</div>
        <div className="h4">lg - Lorem ipsum dolor sit</div>
        <div className="h5">md - Lorem ipsum dolor sit</div>
        <div className="p">base - Lorem ipsum dolor sit.</div>
        <div className="sm">Lorem ipsum dolor sit</div>
        <div className="xs">Lorem ipsum dolor sit</div>
      </div>
      <div className="flex flex-wrap">
        {/* {colors && colors.map(color => {
          return (
            <div key={color} className={`h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-${color}`}></div>
          )
        })} */}
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-brown"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-cream"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-blue"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-green"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-dark-orange"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-light-orange"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-bg-light"></div>
        <div className="h-32 w-32 min-w-[8rem] flex justify-center items-center bg-tk-black"></div>
      </div>
      <div className="card-container h-96 w-[42rem] border-[1px] border-royal-blue-300 bg-royal-blue-200 text-royal-blue-950 rounded-xl">
        <div className="p-8">
          <div className="flex flex-col gap-6 h-full">
            <div className="rounded-xl p-4 bg-royal-blue-50 flex items-center gap-8">
              <img className="w-8 h-8" src="/gear.png" alt=""/>
              This is the title
            </div>
            <div className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi temporibus facilis odio sed eius totam vero aperiam recusandae aliquam in qui ullam cumque corrupti pariatur aliquid rem aspernatur soluta?
            </div>
          </div>
        </div>
      </div>
      <div className="w-56 card-shadow rounded-2xl border overflow-hidden card-background-color card-border-color">
        <div className="p-4 sticky top-0">
          <div className="flex items-center gap-1.5">
            <div className="font-medium">
              Buttons · Bezel
            </div>
          </div>
        </div>
        <div className="p-4 pt-0 overflow-y-scroll">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="text-white button-bezel w-full text-center bg-gradient-to-r from-royal-blue-500 to-royal-blue-600 py-2 px-6 rounded-lg button-shadow">
                Default
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-white button-bezel w-full text-center bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 py-2 px-6 rounded-lg button-shadow">
                Hover
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-white button-bezel w-full text-center bg-gradient-to-r from-royal-blue-700 to-royal-blue-800 py-2 px-6 rounded-lg button-shadow">
                Active
              </div>
            </div>
            <div className="flex gap-2">
              <div className= "text-royal-blue-400 bg-royal-blue-50 w-full text-center py-2 px-6 rounded-lg">
                Disabled
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
)
}
