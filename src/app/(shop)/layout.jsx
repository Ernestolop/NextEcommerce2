import { TopMenu } from "@/components";

const ShopLayout = ({ children }) => {
    return (
        <main>
            <TopMenu />
            {children}
        </main>
    )
}

export default ShopLayout;