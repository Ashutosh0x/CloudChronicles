"use client";
import Image from "next/image";
import google from "@/public/logos/google_cloud.svg";
import aws from "@/public/logos/amazon_aws.svg";
import azure from "@/public/logos/microsoft_azure.svg";
import kubernetes from "@/public/logos/kubernetes.svg";
import cloudflare from "@/public/logos/cloudflare.svg";
import jenkins from "@/public/logos/jenkins.svg";
export function Logos() {
  return (
    <div className="py-10 overflow-hidden">
      <h2 className="text-center text-lg font-semibold leading-7">
        Trusted by the best companies in the world
      </h2>
      <div className="relative mt-10 overflow-hidden">
        <div className="animate-scroll">
          <div className="flex">
            {[google, cloudflare, azure, aws, kubernetes].map((logo, index) => (
              <div key={index} className="inline-block px-4 py-2">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-32 h-auto object-contain dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          width: 100%; /* Container width */
          overflow: hidden;
          animation: scroll 10s linear infinite; /* Reduced duration for faster scrolling */
        }
        .animate-scroll .flex {
          width: 200%; /* Adjust this width to match the total width of your logos */
          display: flex;
        }
      `}</style>
    </div>
  );
}
