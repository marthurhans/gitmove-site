import EarlyAccessForm from "./EarlyAccessForm";

function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="text-center w-full max-w-5xl space-y-8 px-6">
        <img
          src="/GitMove_TM_White_Back.png"
          alt="GitMove Logo"
          className="mx-auto w-[400px] md:w-[600px] drop-shadow-lg"
        />

        <h2 className="text-2xl font-bold text-white mt-4">
          Git out of harm’s way™
        </h2>

        <div className="space-y-2 text-center text-gray-300 text-lg font-medium mt-4">
          <p>🛡️ <strong>Protect your <code className="bg-gray-800 px-1 rounded">.git</code></strong></p>
          <p>🚚 <strong>Use your <code className="bg-gray-800 px-1 rounded">.git</code> anywhere</strong></p>
          <p>📦 <strong>Move your <code className="bg-gray-800 px-1 rounded">.git</code> easily — even offline</strong></p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://github.com/gitmove-cli/gitmove-cli"
          target="_blank"
          className="group px-6 py-2 rounded hover:bg-white hover:text-black transition border border-white bg-gray-800 text-white font-semibold"
        >
          View Official{" "}
          <code className="font-mono px-2 py-1 rounded border border-gray-700 text-green-400 bg-black transition group-hover:bg-gray-800">
            gitmove-cli
          </code>{" "}
          Repo
        </a>
      </div>


        <EarlyAccessForm />


          {/* Official repo claim — polished for clarity and accuracy */}
          <div className="text-sm text-gray-400 leading-relaxed space-y-1">
            <p>
              <span className="text-white font-medium">GitMove CLI is 100% open source and free to use.</span>
              The official public release will be available for download and testing at:
            </p>
            <p>
              <a
                href="https://github.com/gitmove-cli/gitmove-cli"
                className="underline text-white hover:text-gray-300"
                target="_blank"
              >
                github.com/gitmove-cli/gitmove-cli
              </a>
            </p>
            <p>
              Community contributions and user feedback will be welcome after the initial launch.
            </p>
          </div>


        <p className="text-sm text-gray-400">
          Created and maintained by:
          <br />
          <span className="font-semibold text-white">Mike Hans</span>
        </p>


          {/* Clickable email */}
          <p className="text-sm text-gray-400">
            Contact:&nbsp;
            <a
              href="mailto:marthurhans@gitmove.com"
              className="underline text-white hover:text-gray-300"
            >
              marthurhans@gitmove.com
            </a>
          </p>


        <hr className="border-gray-700 my-6 w-2/3 mx-auto" />

        <p className="text-gray-400 italic">Coming Summer 2025.</p>

        <p className="text-xs text-gray-400 italic">
          *By joining, you consent to receive one-time or occasional updates from GitMove via email.  
          Your information will never be sold, shared, or used for any unrelated purpose.
        </p>

        <p className="text-xs text-gray-600 mt-8 leading-relaxed">
          “GitMove”, “GitMove CLI”, “GitMove Pro”, “Git out of harm’s way”, and the GitMove logo are trademarks of Mike Hans.<br />
          All rights reserved. Unauthorized use of the brand, logo, or affiliated repositories is prohibited.
        </p>
      </div>
    </main>
  );
}

export default App;





