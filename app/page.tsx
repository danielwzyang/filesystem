import LoginForm from "@/components/LoginForm"

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <h1 className="text-2xl text-[#545454]">file system</h1>
            <LoginForm />
        </div>
    )
}
