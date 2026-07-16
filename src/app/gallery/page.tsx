// "use client";
// 
// import { DATA } from "@/data/resume";
// import Link from "next/link";
// import { useTranslation } from "@/i18n/context";
// import { useRef, useEffect, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { ChevronLeft, ChevronRight, X, ListFilter, Check } from "lucide-react";
// 
// export default function GalleryPage() {
//     const { t, lang } = useTranslation();
//     const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
//     const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
//     const [isSortOpen, setIsSortOpen] = useState(false);
//     const sortRef = useRef<HTMLDivElement>(null);
// 
//     const data = DATA[lang as keyof typeof DATA] || DATA.en;
// 
//     // Sort items based on user choice
//     const sortedItems = useMemo(() => {
//         return [...data.gallery].sort((a: any, b: any) => {
//             const dateA = new Date(a.date).getTime();
//             const dateB = new Date(b.date).getTime();
//             return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
//         });
//     }, [sortOrder, data.gallery]);
// 
//     // Keyboard navigation & body scroll lock for the lightbox
//     useEffect(() => {
//         if (selectedImageIndex !== null) {
//             document.body.style.overflow = "hidden";
//             const handleKeyDown = (e: KeyboardEvent) => {
//                 if (e.key === "Escape") setSelectedImageIndex(null);
//                 if (e.key === "ArrowLeft") navigate("prev");
//                 if (e.key === "ArrowRight") navigate("next");
//             };
//             window.addEventListener("keydown", handleKeyDown);
//             return () => window.removeEventListener("keydown", handleKeyDown);
//         } else {
//             document.body.style.overflow = "unset";
//         }
//     }, [selectedImageIndex]);
// 
//     // Close sorting dropdown on clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
//                 setIsSortOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);
// 
//     const navigate = (direction: "prev" | "next") => {
//         if (selectedImageIndex === null) return;
//         const total = sortedItems.length;
//         if (direction === "prev") {
//             setSelectedImageIndex((selectedImageIndex - 1 + total) % total);
//         } else {
//             setSelectedImageIndex((selectedImageIndex + 1) % total);
//         }
//     };
// 
//     return (
//         <div className="min-h-screen bg-background text-foreground py-8 md:py-16 px-3 sm:px-6 lg:px-8 transition-colors duration-300">
//             {/* Header Section */}
//             <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 mb-8 md:mb-12">
//                 <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
//                     <div className="flex flex-col gap-4">
//                         <Link
//                             href="/"
//                             className="text-xs font-bold text-muted-foreground hover:text-primary transition-all border border-border/60 rounded-xl px-4 py-2 inline-flex items-center gap-2 w-fit bg-muted/10 hover:bg-muted/30 uppercase tracking-widest"
//                         >
//                             <ChevronLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
//                             {t.backToHome}
//                         </Link>
// 
//                         <div className="flex items-baseline gap-4 flex-wrap">
//                             <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight font-heading">
//                                 {t.gallery}
//                             </h1>
//                             <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
//                                 {sortedItems.length} {t.posts}
//                             </span>
//                         </div>
//                         <p className="text-muted-foreground text-sm sm:text-lg max-w-xl font-medium leading-relaxed opacity-80">
//                             {t.galleryDescription}
//                         </p>
//                     </div>
// 
//                     {/* Sorting Button/Dropdown Container */}
//                     <div className="relative self-start md:self-auto" ref={sortRef}>
//                         <button
//                             onClick={() => setIsSortOpen(!isSortOpen)}
//                             className="flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-muted/40 hover:bg-muted/80 border border-border/80 transition-all shadow-xs w-fit text-xs md:text-sm font-semibold tracking-wide"
//                         >
//                             <ListFilter className="size-4 text-muted-foreground" />
//                             <span className="text-foreground uppercase tracking-wider">
//                                 {sortOrder === "newest" ? t.newestFirst : t.oldestFirst}
//                             </span>
//                             <ChevronRight className={`size-4 text-muted-foreground/60 transition-transform duration-300 ${isSortOpen ? "rotate-90" : "rotate-0"}`} />
//                         </button>
// 
//                         <AnimatePresence>
//                             {isSortOpen && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 8, scale: 0.97 }}
//                                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                                     exit={{ opacity: 0, y: 8, scale: 0.97 }}
//                                     transition={{ duration: 0.15, ease: "easeOut" }}
//                                     className="absolute top-full right-0 md:left-0 mt-2 w-56 z-50 p-1.5 bg-popover/95 backdrop-blur-xl border border-border rounded-xl shadow-xl overflow-hidden"
//                                 >
//                                     <div className="flex flex-col gap-1">
//                                         <button
//                                             onClick={() => { setSortOrder("newest"); setIsSortOpen(false); }}
//                                             className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all text-xs font-bold uppercase tracking-wider ${sortOrder === "newest" ? "bg-accent text-accent-foreground" : "hover:bg-accent/40 text-muted-foreground hover:text-foreground"}`}
//                                         >
//                                             <span>{t.newestFirst}</span>
//                                             {sortOrder === "newest" && <Check className="size-3.5 text-primary" />}
//                                         </button>
//                                         <button
//                                             onClick={() => { setSortOrder("oldest"); setIsSortOpen(false); }}
//                                             className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-all text-xs font-bold uppercase tracking-wider ${sortOrder === "oldest" ? "bg-accent text-accent-foreground" : "hover:bg-accent/40 text-muted-foreground hover:text-foreground"}`}
//                                         >
//                                             <span>{t.oldestFirst}</span>
//                                             {sortOrder === "oldest" && <Check className="size-3.5 text-primary" />}
//                                         </button>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 </div>
//                 <div className="h-px bg-gradient-to-r from-border/60 via-border/10 to-transparent w-full" />
//             </div>
// 
//             {/* Pinterest Style Responsive Masonry Grid Layout */}
//             <div className="max-w-7xl mx-auto w-full">
//                 <motion.div 
//                     layout
//                     className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
//                 >
//                     {sortedItems.map((item: any, index: number) => (
//                         <motion.div
//                             key={item.id || index}
//                             layout
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
//                             className="break-inside-avoid relative rounded-xl sm:rounded-2xl overflow-hidden bg-muted group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 border border-border/40"
//                             onClick={() => setSelectedImageIndex(index)}
//                         >
//                             <img
//                                 src={item.url}
//                                 alt={item.title}
//                                 className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                                 loading="lazy"
//                             />
// 
//                             {/* Responsive Hover Text Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 pointer-events-none">
//                                 <h3 className="text-white font-bold text-sm sm:text-lg leading-snug mb-1 transform translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">
//                                     {item.title}
//                                 </h3>
//                                 {item.description && (
//                                     <p className="text-white/80 text-[10px] sm:text-xs line-clamp-2 font-medium leading-relaxed transform translate-y-3 md:group-hover:translate-y-0 transition-transform duration-300 delay-100">
//                                         {item.description}
//                                     </p>
//                                 )}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
// 
//             {/* Lightbox Modal display */}
//             <AnimatePresence>
//                 {selectedImageIndex !== null && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-2xl"
//                         onClick={() => setSelectedImageIndex(null)}
//                     >
//                         {/* Lightbox Navigation Controls */}
//                         <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 md:px-10 pointer-events-none z-50">
//                             <button
//                                 onClick={(e) => { e.stopPropagation(); navigate("prev"); }}
//                                 className="p-2.5 sm:p-4 rounded-full bg-muted/80 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-all pointer-events-auto shadow-lg active:scale-95"
//                             >
//                                 <ChevronLeft className="size-5 sm:size-6" />
//                             </button>
//                             <button
//                                 onClick={(e) => { e.stopPropagation(); navigate("next"); }}
//                                 className="p-2.5 sm:p-4 rounded-full bg-muted/80 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-all pointer-events-auto shadow-lg active:scale-95"
//                             >
//                                 <ChevronRight className="size-5 sm:size-6" />
//                             </button>
//                         </div>
// 
//                         {/* Close Button */}
//                         <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[110]">
//                             <button
//                                 onClick={() => setSelectedImageIndex(null)}
//                                 className="p-2.5 sm:p-3 bg-muted/80 backdrop-blur-md border border-border rounded-full text-foreground hover:bg-muted hover:rotate-90 transition-all duration-300 shadow-md active:scale-90"
//                             >
//                                 <X className="size-5" />
//                             </button>
//                         </div>
// 
//                         {/* Main Modal Image Content */}
//                         <motion.div
//                             key={selectedImageIndex}
//                             initial={{ opacity: 0, scale: 0.96, y: 15 }}
//                             animate={{ opacity: 1, scale: 1, y: 0 }}
//                             exit={{ opacity: 0, scale: 0.96, y: -15 }}
//                             transition={{ duration: 0.3, ease: "easeOut" }}
//                             className="relative flex flex-col items-center justify-center max-w-5xl w-full max-h-[85vh] overflow-hidden"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <div className="relative w-full h-full flex flex-col justify-center items-center group">
//                                 <img
//                                     src={sortedItems[selectedImageIndex].url}
//                                     alt={sortedItems[selectedImageIndex].title}
//                                     className="max-w-full max-h-[65vh] sm:max-h-[75vh] w-auto h-auto rounded-xl object-contain"
//                                 />
// 
//                                 {/* <div className="mt-4 text-center max-w-2xl px-4 flex flex-col items-center gap-1.5">
//                                     <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
//                                         {sortedItems[selectedImageIndex].title}
//                                     </h2>
//                                     {sortedItems[selectedImageIndex].description && (
//                                         <p className="text-muted-foreground text-xs sm:text-sm font-medium leading-relaxed">
//                                             {sortedItems[selectedImageIndex].description}
//                                         </p>
//                                     )}
//                                 </div> */}
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }

export default function GalleryPage() {
    return null;
}
