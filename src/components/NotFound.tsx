import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0000aa] text-white font-mono p-4 flex flex-col items-center justify-center text-center selection:bg-white selection:text-[#0000aa]">
            <h1 className="text-xl md:text-3xl mb-8 bg-white text-[#0000aa] px-4 py-1 inline-block font-bold">
                FATAL EXCEPTION: 0x404
            </h1>

            <div className="max-w-2xl text-left space-y-4 mb-12">
                <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36. The current application will be terminated.</p>
                <p>* Press any key to terminate the current application.</p>
                <p>* Press CTRL+ALT+DEL to restart your computer. You will lose any unsaved information in all applications.</p>

                <br />
                <p className="text-yellow-400">
                    Caused by: PageNotFoundException: The requested resource was not found on this server.
                </p>
                <p className="pl-4 text-gray-300 text-xs">
                    at org.portfolio.routes.Router.handleRequest(Router.java:404)<br />
                    at org.portfolio.core.Dispatcher.dispatch(Dispatcher.java:128)<br />
                    at org.portfolio.server.WorkerThread.run(WorkerThread.java:512)
                </p>
            </div>

            <Link
                to="/"
                className="px-6 py-3 border-2 border-white hover:bg-white hover:text-[#0000aa] transition-colors font-bold tracking-wider cursor-pointer animate-pulse"
            >
                [ PRESS ENTER TO CONTINUE ]
            </Link>
        </div>
    );
};

export default NotFound;
