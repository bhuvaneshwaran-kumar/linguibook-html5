import { Image, WindowDiv } from "../styles/style"

export default function AppLoaderComponent(props) {
    return <WindowDiv>
        <Image src="/images/spinner.svg" alt="loader" />
    </WindowDiv >
}