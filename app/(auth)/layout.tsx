export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="h-full w-screen flex flex-row items-center justify-center">
            {children}
        </div>
    );
}