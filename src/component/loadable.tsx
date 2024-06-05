import { ElementType, Suspense } from "react";
const Loadable = (Component: ElementType) => (props: any) => {
    return (
        <Suspense fallback={<div>Loading ... </div>}>
            <Component {...props} />
        </Suspense>
    )
}
export default Loadable;