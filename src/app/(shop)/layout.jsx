import { TopMenu, Sidebar, Footer } from "@/components";
import { titleFont } from "@/config/fonts";

const ShopLayout = ({ children }) => {
    return (
        <main className="min-h-screen">
            <TopMenu titleFont={titleFont.className}/>
            <Sidebar />
            <div className="px-0 sm:px-10">
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default ShopLayout;