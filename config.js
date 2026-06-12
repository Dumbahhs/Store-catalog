// ============================================================
// THROTTLE RP — STORE CONFIG
// ============================================================
// This is the ONLY file you need to edit to manage listings.
//
// To HIDE a business:   set enabled: false
// To SHOW a business:   set enabled: true
// To ADD a business:    copy any entry, change id + details
// To ADD an image:      set image: "assets/images/your-file.jpg"
// To update Tebex link: change tebexLink to your package URL
// ============================================================

const STORE_CONFIG = {

  businesses: [

    // ══════════════════════════════════════════════════════
    // MECHANICS
    // ══════════════════════════════════════════════════════
    {
      category: "Mechanics",
      items: [
        {
          id: "otos-auto",
          enabled: true,
          name: "Oto's Auto",
          description: "A trusted local mechanic shop known for quality repairs and affordable service. Ideal for city residents needing reliable work done fast.",
          location: "TBD",
          type: "Automotive / Repairs",
          tebexLink: "https://your-store.tebex.io/package/otos-auto",
          image: "", // e.g. "assets/images/otos-auto.jpg"
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "bennys",
          enabled: true,
          name: "Benny's Original Motor Works",
          description: "The city's most well-known custom vehicle shop. Full tuning, wraps, and upgrades available to the public.",
          location: "LSIA Industrial District",
          type: "Automotive / Services",
          tebexLink: "https://your-store.tebex.io/package/bennys",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔧", text: "Full Tuning Suite — access to all vehicle upgrade menus" },
          ]
        },
        {
          id: "redline",
          enabled: true,
          name: "Redline",
          description: "High-performance automotive shop specializing in racing builds and precision custom modifications.",
          location: "TBD",
          type: "Automotive / Performance",
          tebexLink: "https://your-store.tebex.io/package/redline",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // RESTAURANTS
    // ══════════════════════════════════════════════════════
    {
      category: "Restaurants",
      items: [
        {
          id: "catcafe",
          enabled: true,
          name: "Cat Cafe",
          description: "A cozy and unique cafe experience with a loyal city following. Great atmosphere and consistent foot traffic.",
          location: "TBD",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/catcafe",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "☕", text: "Food & Drink Production — craft and sell to city residents" },
          ]
        },
        {
          id: "burgershot",
          enabled: true,
          name: "Burger Shot",
          description: "One of the most iconic fast food chains in the city. High foot traffic location with full staff management.",
          location: "Little Seoul",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/burgershot",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🍔", text: "Food Production — craft and sell food to city residents" },
          ]
        },
        {
          id: "hornys",
          enabled: true,
          name: "Horny's",
          description: "A popular diner-style restaurant with a distinctive brand and a strong local following in the city.",
          location: "TBD",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/hornys",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "koi",
          enabled: true,
          name: "Koi",
          description: "An upscale dining establishment offering an exclusive experience. Premium clientele and prestigious city reputation.",
          location: "TBD",
          type: "Food & Beverage / Fine Dining",
          tebexLink: "https://your-store.tebex.io/package/koi",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "pearls",
          enabled: true,
          name: "Pearls",
          description: "A sophisticated fine-dining venue with stunning views and an exclusive atmosphere for the city's elite.",
          location: "TBD",
          type: "Food & Beverage / Fine Dining",
          tebexLink: "https://your-store.tebex.io/package/pearls",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
        {
          id: "upnatom",
          enabled: true,
          name: "Up n Atom",
          description: "A beloved city burger joint with a retro feel and a strong local following. Fast service, high demand.",
          location: "TBD",
          type: "Food & Beverage",
          tebexLink: "https://your-store.tebex.io/package/upnatom",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
          ]
        },
      ]
    },

    // ══════════════════════════════════════════════════════
    // CLUBS
    // ══════════════════════════════════════════════════════
    {
      category: "Clubs",
      items: [
        {
          id: "vanilla-unicorn",
          enabled: true,
          name: "Vanilla Unicorn",
          description: "An upscale establishment with a loyal and recurring clientele. VIP access controls and private management tools included.",
          location: "Strawberry",
          type: "Entertainment / Nightlife",
          tebexLink: "https://your-store.tebex.io/package/vanilla-unicorn",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔑", text: "VIP Access Controls — restrict and grant private area access" },
          ]
        },
        {
          id: "bahama-mamas",
          enabled: true,
          name: "Bahama Mamas",
          description: "The city's hottest nightclub. Premium sound system, full bar, and a constant stream of high-profile guests.",
          location: "TBD",
          type: "Entertainment / Nightlife",
          tebexLink: "https://your-store.tebex.io/package/bahama-mamas",
          image: "",
          features: [
            { icon: "👥", text: "Employee Management — hire, fire, and set job grades" },
            { icon: "💰", text: "Society Account — dedicated business bank account" },
            { icon: "📦", text: "Business Storage — shared inventory for all employees" },
            { icon: "📋", text: "Hiring Access — post official job listings" },
            { icon: "⭐", text: "Custom Opportunities — exclusive owner-only contracts" },
            { icon: "🔑", text: "VIP Access Controls — restrict and grant private area access" },
          ]
        },
      ]
    },

  ] // end businesses
};
