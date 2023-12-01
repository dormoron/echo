import {Component, JSXElement} from "solid-js";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

export interface LayoutProps{
    children: JSXElement
}

const Layout:Component<LayoutProps> = ({children}) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)
export default Layout;