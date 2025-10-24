import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { mockProducts, categories } from "@/data/products";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useScrollAnimation();
  const filterRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const filteredProducts = activeCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header 
        ref={headerRef.ref}
        className={`border-b border-border bg-card transition-all duration-700 ${
          headerRef.isVisible ? 'animate-fade-in' : 'scroll-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Software Marketplace
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover premium software solutions for your business
          </p>
        </div>
      </header>

      <div 
        ref={filterRef.ref}
        className={`transition-all duration-700 ${
          filterRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'
        }`}
      >
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      <div 
        ref={gridRef.ref}
        className={`transition-all duration-700 ${
          gridRef.isVisible ? 'animate-fade-in' : 'scroll-hidden'
        }`}
      >
        <ProductGrid 
          products={filteredProducts}
        />
      </div>
    </div>
  );
};

export default Index;
