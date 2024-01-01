import { TopMenu } from "@/components";

const ShopLayout = ({ children }) => {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <div className="px-0 sm:px-10">
                {children}
            </div>
        </main>
    )
}

export default ShopLayout;