interface DeviceMockupProps {
  type: "laptop" | "desktop" | "mobile";
  screenshot: string;
  alt: string;
}

export function DeviceMockup({ type, screenshot, alt }: DeviceMockupProps) {
  if (type === "mobile") {
    return (
      <div className="flex justify-center items-center">
        <div className="relative w-[200px]">
          {/* Mobile Frame */}
          <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] overflow-hidden">
              {/* Mobile Screen */}
              <div className="relative aspect-[9/19.5]">
                <img
                  src={screenshot}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "desktop") {
    return (
      <div className="w-full">
        {/* Desktop Monitor */}
        <div className="bg-gray-800 rounded-t-lg p-2 shadow-2xl">
          <div className="bg-white rounded-t overflow-hidden">
            {/* Screen */}
            <div className="relative aspect-[16/10]">
              <img
                src={screenshot}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Monitor Stand */}
        <div className="flex justify-center">
          <div className="w-20 h-2 bg-gray-700 rounded-b"></div>
        </div>
        <div className="flex justify-center">
          <div className="w-32 h-3 bg-gray-800 rounded-b-lg"></div>
        </div>
      </div>
    );
  }

  // Laptop (default)
  return (
    <div className="w-full">
      {/* Laptop Screen */}
      <div className="bg-gray-800 rounded-t-lg p-2 shadow-2xl">
        <div className="bg-white rounded-t overflow-hidden">
          {/* Screen Content */}
          <div className="relative aspect-[16/10]">
            <img
              src={screenshot}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Laptop Base */}
      <div className="relative">
        <div className="bg-gray-700 h-2 rounded-b-lg shadow-lg"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-b-lg"></div>
      </div>
    </div>
  );
}
