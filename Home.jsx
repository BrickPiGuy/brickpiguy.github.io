import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, BookOpen, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Research with Grit</h1>
          <p className="mt-2 text-lg text-gray-600">
            Science as ego renunciation. Open, rigorous, and meaningful.
          </p>
        </header>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              Hi, my name is Joe Dwyer. I’m a late-stage PhD student in Computer Science researching Large
              Language Models, with a focus on training and parameter
              optimization. I believe in process over prestige, and I aim to
              show that simple, meaningful research can change minds.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Core Principles</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Transparency and open access</li>
              <li>Iterative, reproducible science</li>
              <li>Welcoming feedback and post-publication dialogue</li>
              <li>Valuing null results as contributions</li>
              <li>Accessibility for anyone curious about research</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Recent Work</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <BookOpen className="mr-2" /> A Quantitative Experimental Study on Exploring Parameter Efficiency with Varying Token Counts in OpenLLaMA Training
                </a>
              </li>
              /*
              <li>
                <a
                  href="https://github.com/yourname/llm-training-tools"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <Github className="mr-2" /> GitHub Repo: LLM Training Tools
                </a>
              </li>
              */
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Connect</h2>
            <div className="flex space-x-4">
              <a href="mailto:jdwyer@ecpi.edu" className="text-blue-600 hover:underline flex items-center">
                <Mail className="mr-2" /> Email
              </a>
              <a href="https://github.com/brickpiguy" className="text-blue-600 hover:underline flex items-center">
                <Github className="mr-2" /> GitHub
              </a>
              /*
              <a href="https://orcid.org/0000-0000-0000-0000" className="text-blue-600 hover:underline flex items-center">
                <ExternalLink className="mr-2" /> ORCID
              </a>
              */
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
