import React from "react";

export default function Origin() {
  return (
    <main className="bg-gray-950 min-h-screen text-white px-6 py-10">
        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto">
      <h1>How I Lost My Git History in Dropbox — and Built GitMove™ to Fix It</h1>

      <h3>1. The Break</h3>
      <p>Back when I was working on a Udemy project to prep for my Software Engineering degree, I ran into a disaster:</p>
      <p>I opened a project I’d been working on in Dropbox — and all my Git history was gone.</p>
      <p>The project files were still there, but Git was blank. No commits. No branches. No trace. Just... gone.</p>
      <p>I reached out to the Udemy instructor and explained what happened. Their response?</p>
      <blockquote>
        <p>“Yeah, don’t use Git in Dropbox. It’s been known to warp or destroy Git repos.”</p>
      </blockquote>
      <p>Oof. I was using Dropbox all the time because I loved it. Still do. I enjoy the convenience of working remotely on different machines.</p>
      <p>But apparently, Git and Dropbox don’t get along.</p>
      <p>Later, I tried copying a Git project folder from one directory to another — just copying and pasting it — and something broke again.</p>
      <p>It hit me: <em>“Git doesn’t like to be moved.”</em></p>

      <h3>2. The Frustration</h3>
      <p>I was still a early-stage developer at the time. I didn’t know how to fix it, so I just wrote it off as a lesson learned:</p>
      <ul>
        <li>Don’t move Git.</li>
        <li>Don’t use Git inside anything that syncs or shifts — like Dropbox or OneDrive.</li>
      </ul>

      <h3>3. The Curiosity</h3>
      <p>But here’s the thing: I love Git. I think it’s amazing. And I still love useing Dropbox, OneDrive, and Google Drive. I use them every single day.</p>
      <p>After graduating in May, I dove into building my portfolio — and I kept getting drawn to Git-related projects.</p>
      <p>Not just repos — but ideas to bring Git’s amazing versioning power to more people, especially folks outside the tech industry.</p>
      <p>Then one day, out of habit, I almost started a new Git project inside a Dropbox folder. That old panic hit again.</p>
      <p>So I asked ChatGPT — half frustrated — <strong>“Why does Git break in file-sharing tools?”</strong></p>
      <p>The more I researched, the more fascinated I became. So I asked:</p>
      <blockquote>
        <p>“Why not just put Git in a box when it moves?”</p>
      </blockquote>
      <p>To my surprise, ChatGPT said: <em>“That’s totally doable.”</em></p>
      <p>I didn’t fully believe it — AI is often a ridiculous optimist. So I started drilling into it:</p>
      <ul>
        <li>“What would actually protect a .git/ folder from damage?”</li>
        <li>“Are there tools that do this now?”</li>
        <li>“Are there any simple strategies to deal with this issue?”</li>
      </ul>
      <p>I found... almost nothing.</p>

      <h3>4. The Build</h3>
      <p>That’s when it clicked. This wasn’t just a neat idea — this was a real need. A niche.</p>
      <p>Something Git users like me have worked around, but never had a real solution for.</p>
      <p>So I grabbed <a href="https://gitmove.com">GitMove.com</a> while it was still available, and I started designing a tool to “box up” Git safely — like wrapping your valuables before moving to a new house.</p>
      <p>That’s how <strong>GitMove</strong> was born.</p>

      <h3>5. The Tool</h3>
      <p>GitMove lets you move Git safely.</p>
      <p>With a few commands, you can:</p>
      <ul>
        <li>Use Git in Dropbox, OneDrive, or shared drives without fear</li>
        <li>Move a repo to a new machine via USB or cloud storage</li>
        <li>Work offline without ever uploading your source code</li>
      </ul>
      <p>It works like this:</p>
      <ol>
        <li>Run <code>gitmove pack</code> to prep your repo for travel (think <code>git push</code>)</li>
        <li>Move the project however you want — no internet required</li>
        <li>Run <code>gitmove unpack</code> at the new location (think <code>git pull</code>)</li>
      </ol>
      <p>And you're good to go.</p>
      <p>In the future, GitMove will let you do all this without even needing Git installed — perfect for newer devs or teams working in restricted environments.</p>

      <h3>6. The Ask</h3>
      <p>GitMove is still in development, but a working version is nearly here.</p>
      <p>If you’ve ever:</p>
      <ul>
        <li>Lost Git history to Dropbox</li>
        <li>Broken a repo by dragging it to a new machine</li>
        <li>Wanted to back up Git locally, safely, and simply...</li>
      </ul>
      <p>Then GitMove might be what you’re looking for.</p>
      <p>👉 <a href="https://gitmove.com">Visit GitMove.com</a></p>
      <p>💻 Or check out the repo (soon to be public)</p>
      <p><strong>GitMove — Git out of harm’s way.™</strong></p>

      <div className="text-center mt-10">
        <a
          href="/"
          className="px-6 py-2 rounded hover:bg-white hover:text-black transition border border-white bg-gray-800 text-white font-semibold"
        >
          ← Back to Home
        </a>
      </div>

      <p className="text-xs text-gray-500 italic mt-12 text-center">
        “GitMove”, “GitMove CLI”, “GitMove Pro”, “Git out of harm’s way”, and the GitMove logo are trademarks of Mike Hans.<br />
        All rights reserved. Unauthorized use of the brand, logo, or affiliated repositories is prohibited.
        </p>
       </article>
    </main>
  );
}