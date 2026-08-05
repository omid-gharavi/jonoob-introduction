export default function Loading() {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
            <span className="loader"></span>
            <p className="text-2xl">درحال بارگذاری...</p>
        </div>
    )
}