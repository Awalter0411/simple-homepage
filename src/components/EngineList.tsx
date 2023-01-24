import { useContext } from "react"
import styled from "styled-components"
import SearchContext from "../context/SearchContext"

const EngineListWrapper = styled.div`
  display: flex;
  border-radius: 15px;
  width: 600px;
  height: 53px;
  padding: 3px 20px 3px 20px;
  font-size: 12px;
  margin-left: -44px;
  background-color: #d8d8d8af;
  box-sizing: border-box;
`

const EngineItem = styled.div`
  margin-right: 20px;
  padding: 3px 7px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background-color: #eeeeeeb6;
  }
`

export const EngineListData = [
  {
    id: 1,
    name: 'Bing',
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8201" width="25" height="25"><path d="M128.006097 896.002032a21.332661 21.332661 0 0 1-21.332661-21.332661V21.348921a21.289662 21.289662 0 0 1 29.268535-19.796686l213.329613 85.331645a21.275662 21.275662 0 0 1 13.397787 19.797686v554.657193a21.485659 21.485659 0 0 1-6.229901 15.10376L143.109858 889.773131A21.503659 21.503659 0 0 1 128.006097 896.002032z m21.332662-843.165611v770.334768L320.003049 652.506899V121.102337L149.338759 52.836421z" p-id="8202"></path><path d="M341.33571 1024a21.460659 21.460659 0 0 1-10.964826-3.029952l-213.329612-127.997967a21.375661 21.375661 0 0 1 0.59699-36.948414l767.987805-426.659225A21.332661 21.332661 0 0 1 917.326564 448.009146v213.329613a21.332661 21.332661 0 0 1-10.153839 18.175711l-554.658193 341.32858a21.41866 21.41866 0 0 1-11.178822 3.15695zM170.67242 875.39436l170.535292 102.313375 533.453529-328.272787V484.27557l-703.988821 391.11879z" p-id="8203"></path><path d="M691.367152 583.047002a21.546658 21.546658 0 0 1-7.849876-1.492976l-179.367151-71.038872a21.289662 21.289662 0 0 1-11.946811-11.903811l-85.332645-213.330613a21.332661 21.332661 0 0 1 27.09357-27.988556l469.325548 170.664291a21.332661 21.332661 0 0 1 3.071951 38.697385l-204.626751 113.705195a21.247663 21.247663 0 0 1-10.366835 2.687957zM528.38474 474.20573l161.447436 63.913985 154.92054-86.057633-380.579957-138.407802 64.211981 160.55145z" p-id="8204"></path></svg>,
    link: (searchText: string) => `https://cn.bing.com/search?q=${searchText}`
  },
  {
    id: 2,
    name: 'Google',
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10151" width="25" height="25"><path d="M597.333333 554.666667h110.250667a42.666667 42.666667 0 1 1 0 85.333333H554.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-128a42.666667 42.666667 0 0 1 42.666667-42.666666h338.986666a42.666667 42.666667 0 0 1 42.410667 37.973333c1.706667 15.658667 2.602667 31.445333 2.602667 47.36 0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333c91.264 0 178.304 28.757333 250.581333 81.322667a42.666667 42.666667 0 0 1 5.12 64.682667l-123.477333 123.434666a42.666667 42.666667 0 0 1-50.602667 7.253334A170.666667 170.666667 0 1 0 512 682.666667a42.666667 42.666667 0 0 1 0 85.376 256 256 0 1 1 92.928-494.592l64.426667-64.426667A339.84 339.84 0 0 0 512 170.666667a341.333333 341.333333 0 1 0 341.333333 341.333333h-256v42.666667z" p-id="10152"></path></svg>,
    link: (searchText: string) => `https://www.google.com/search?q=${searchText}`
  },

  {
    id: 3,
    name: 'Baidu',
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11144" width="25" height="25"><path d="M252.885333 533.205333c88.021333-18.901333 76.032-124.117333 73.386667-147.114666-4.309333-35.413333-45.994667-97.365333-102.613333-92.458667-71.253333 6.4-81.621333 109.269333-81.621334 109.269333-9.642667 47.573333 23.04 149.205333 110.848 130.304z m93.44 182.954667c-2.56 7.381333-8.32 26.282667-3.328 42.752 9.813333 36.949333 41.898667 38.613333 41.898667 38.613333h46.08v-112.64H381.610667c-22.186667 6.570667-32.853333 23.850667-35.285334 31.274667z m69.888-359.338667c48.64 0 87.893333-55.978667 87.893334-125.141333 0-69.12-39.253333-125.013333-87.893334-125.013333-48.512 0-87.893333 55.893333-87.893333 125.013333 0 69.162667 39.381333 125.141333 87.893333 125.141333z m209.408 8.234667c64.938667 8.448 106.709333-60.885333 115.029334-113.450667 8.490667-52.48-33.450667-113.408-79.445334-123.904-46.08-10.581333-103.637333 63.274667-108.885333 111.36-6.272 58.88 8.405333 117.674667 73.301333 125.994667z m0 147.114667c-79.573333-123.946667-192.554667-73.514667-230.4-10.453334-37.589333 63.018667-96.256 102.826667-104.576 113.408-8.448 10.410667-121.429333 71.381333-96.341333 182.784 25.045333 111.317333 113.152 109.226667 113.152 109.226667s64.896 6.4 140.202667-10.496c75.349333-16.682667 140.202667 4.181333 140.202666 4.181333s176 58.88 224.128-54.528c48.128-113.493333-27.178667-172.288-27.178666-172.288s-100.522667-77.781333-159.232-161.834666z m-256.341333 330.666666c-49.408-9.856-69.077333-43.562667-71.552-49.322666-2.432-5.845333-16.469333-32.938667-9.045333-79.061334 21.333333-69.077333 82.218667-74.026667 82.218666-74.026666h60.928v-74.88l51.84 0.853333v276.437333h-114.346666z m195.84-0.810666c-51.029333-13.141333-53.376-49.408-53.376-49.408v-145.578667l53.376-0.853333v130.816c3.285333 13.994667 20.608 16.512 20.608 16.512h54.229333v-146.474667h56.832v194.986667h-131.669333z m318.037333-388.693334c0-25.173333-20.906667-100.864-98.346666-100.864-77.610667 0-87.978667 71.466667-87.978667 121.984 0 48.213333 4.053333 115.498667 100.437333 113.365334 96.426667-2.133333 85.888-109.226667 85.888-134.485334z" p-id="11145"></path></svg>,
    link: (searchText: string) => `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${searchText}&fenlei=256&oq=react&rsv_pq=d16f04d8005a4a44&rsv_t=5fdac4saXJfTf1HfPL18EYjbOWzUhpVKpGUNZyGCxC7w85v6bt2edbQdv60&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=1626&rsv_sug3=20&rsv_sug1=18&rsv_sug7=101&rsv_sug2=0&rsv_sug4=1937`
  },
  {
    id: 4,
    name: 'Github',
    icon: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12098" width="25" height="25"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="12099"></path></svg>,
    link: (searchText: string) => `https://github.com/search?q=${searchText}`
  },
]

export default function EngineList() {
  const { currentEngine, setCurrentEngine } = useContext(SearchContext)
  const handleChangeEngine = (name: string) => {
    setCurrentEngine(() => name)
  }

  return (
    <SearchContext.Provider value={{ currentEngine, setCurrentEngine }}>
      <EngineListWrapper>
        {
          EngineListData.map(item => (
            <EngineItem key={item.id} onClick={() => handleChangeEngine(item.name)}>
              {item.icon}
              <div>{item.name}</div>
            </EngineItem>
          ))
        }
      </EngineListWrapper>
    </SearchContext.Provider>
  )
}