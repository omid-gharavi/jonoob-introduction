import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-9">
            <DotLottieReact
                src="/not-found.lottie"
                loop
                autoplay
                className="w-100 h-125 max-md:w-75 max-md:h-75"
            />
            <p className="text-3xl max-md:text-xl">صفحه مورد نظر یافت نشد 404</p>
        </div>
    )
}