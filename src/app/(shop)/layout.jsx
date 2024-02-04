import { TopMenu, Sidebar, Footer } from "@/components";

const ShopLayout = ({ children }) => {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <Sidebar />
            <div className="px-0 sm:px-10">
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default ShopLayout;