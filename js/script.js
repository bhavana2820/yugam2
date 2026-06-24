(function () {
  'use strict';

  /* --- CMS Default Data --- */
  const defaultCmsData = {
    hero: {
      badge: "Tamil Nadu Organic Farm",
      title: "Pure Organic Goodness from Tamil Nadu",
      subtitle: "Fresh, hygienic and naturally grown organic products for healthy living. From our farm to your home — experience authentic farm-fresh quality you can trust.",
      btnPrimaryText: "Explore Products",
      btnPrimaryLink: "#products",
      btnSecondaryText: "Contact Us",
      btnSecondaryLink: "#contact",
      image: "" // Empty string defaults to placeholder
    },
    about: {
      label: "About Us",
      title: "Rooted in Nature, Growing with Purpose",
      story1: "Yugam Organics is a Tamil Nadu-based organic farm and products brand born from a simple belief — that every family deserves access to clean, hygienic, and naturally grown food. What started as a small organic farm has grown into a trusted name for premium organic rice, millets, pulses, spices, oils, and farm-fresh produce.",
      story2: "We work closely with local organic farmers across Tamil Nadu, combining traditional farming wisdom with modern hygiene standards to bring you products that are as pure as nature intended.",
      mission: "To deliver healthy, organic food that nourishes families while promoting natural farming practices. We are committed to clean, hygienic products and bringing authentic farm freshness directly to your doorstep.",
      vision: "To build healthier communities through sustainable organic farming and trusted organic living. We envision a future where every household in Tamil Nadu has access to pure, premium organic products.",
      special: [
        "Naturally grown without harmful chemicals",
        "Carefully sourced from trusted Tamil Nadu farms",
        "Hygienically packed with quality assurance",
        "Premium quality at honest, fair pricing",
        "Rooted in local organic values and customer trust"
      ]
    },
    contact: {
      label: "Get in Touch",
      title: "Contact Us",
      desc: "Have questions about our products or want to place an order? We'd love to hear from you.",
      region: "Tamil Nadu, India",
      phone: "+91 98765 43210",
      email: "hello@yugamorganics.in",
      address: "Yugam Organics Farm, Thanjavur District, Tamil Nadu 613001",
      hours: "Monday – Saturday: 9:00 AM – 6:00 PM",
      whatsapp: "919876543210"
    },
    products: [
      {
        name: "Thanjavur Organic Rice",
        category: "rice",
        desc: "Premium short-grain organic rice from the fertile fields of Thanjavur. Naturally grown, stone-polished, and rich in authentic Tamil Nadu flavour.",
        price: "₹180 / kg",
        image: "product-img-rice"
      },
      {
        name: "Foxtail Millet",
        category: "millets",
        desc: "Nutrient-rich foxtail millet (Thinai) grown using traditional organic methods. A wholesome superfood for modern healthy living.",
        price: "₹120 / kg",
        image: "product-img-millet"
      },
      {
        name: "Organic Toor Dal",
        category: "pulses",
        desc: "Protein-rich organic toor dal, sun-dried and hygienically processed. Perfect for authentic South Indian sambar and dal recipes.",
        price: "₹160 / kg",
        image: "product-img-pulse"
      },
      {
        name: "Turmeric Powder",
        category: "spices",
        desc: "Vibrant organic turmeric powder with high curcumin content. Stone-ground from fresh Erode turmeric roots for maximum purity.",
        price: "₹90 / 100g",
        image: "product-img-spice"
      },
      {
        name: "Cold-Pressed Groundnut Oil",
        category: "oils",
        desc: "Pure cold-pressed groundnut oil extracted without heat or chemicals. Retains natural aroma and nutrients for healthy cooking.",
        price: "₹220 / litre",
        image: "product-img-oil"
      },
      {
        name: "Farm Fresh Vegetables Box",
        category: "produce",
        desc: "A curated weekly box of seasonal organic vegetables harvested fresh from our Tamil Nadu farm. Pesticide-free and farm-to-home delivered.",
        price: "₹350 / box",
        image: "product-img-produce"
      },
      {
        name: "Palm Jaggery",
        category: "health",
        desc: "Traditional karupatti made from organic palm sap. A natural sweetener rich in minerals — no refined sugar, no additives.",
        price: "₹140 / 500g",
        image: "product-img-jaggery"
      },
      {
        name: "Moringa Powder",
        category: "health",
        desc: "Nutrient-dense organic moringa leaf powder. Sun-dried and finely ground — a superfood boost for smoothies, teas, and daily wellness.",
        price: "₹200 / 100g",
        image: "product-img-moringa"
      }
    ]
  };

  let currentCmsData = {};

  function initCms() {
    const saved = localStorage.getItem('yugam_organics_cms_data');
    if (saved) {
      try {
        currentCmsData = JSON.parse(saved);
      } catch (e) {
        currentCmsData = JSON.parse(JSON.stringify(defaultCmsData));
      }
    } else {
      currentCmsData = JSON.parse(JSON.stringify(defaultCmsData));
      localStorage.setItem('yugam_organics_cms_data', JSON.stringify(currentCmsData));
    }
    renderCmsData();
  }

  function renderCmsData() {
    // 1. Hero Section Texts
    const heroBadge = document.getElementById('cms-hero-badge');
    const heroTitle = document.getElementById('cms-hero-title');
    const heroSubtitle = document.getElementById('cms-hero-subtitle');
    const heroBtnPrimary = document.getElementById('cms-hero-btn-primary');
    const heroBtnSecondary = document.getElementById('cms-hero-btn-secondary');

    if (heroBadge) heroBadge.textContent = currentCmsData.hero.badge;
    if (heroTitle) heroTitle.textContent = currentCmsData.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = currentCmsData.hero.subtitle;
    if (heroBtnPrimary) {
      heroBtnPrimary.textContent = currentCmsData.hero.btnPrimaryText;
      heroBtnPrimary.setAttribute('href', currentCmsData.hero.btnPrimaryLink);
    }
    if (heroBtnSecondary) {
      heroBtnSecondary.textContent = currentCmsData.hero.btnSecondaryText;
      heroBtnSecondary.setAttribute('href', currentCmsData.hero.btnSecondaryLink);
    }

    // Hero Custom Image Render
    const heroImageContainer = document.getElementById('cms-hero-image-container');
    if (heroImageContainer) {
      if (currentCmsData.hero.image) {
        heroImageContainer.innerHTML = `<img src="${currentCmsData.hero.image}" alt="Yugam Organics farm" style="border-radius: var(--radius-lg); width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3; box-shadow: var(--shadow-card);">`;
      } else {
        heroImageContainer.innerHTML = `<div class="hero-image-placeholder" role="img" aria-label="Organic farm and fresh produce"></div>`;
      }
    }

    // 2. Products Titles
    const prodLabel = document.getElementById('cms-products-label');
    const prodTitle = document.getElementById('cms-products-title');
    const prodDesc = document.getElementById('cms-products-desc');

    if (prodLabel) prodLabel.textContent = currentCmsData.productsLabel || "Our Collection";
    if (prodTitle) prodTitle.textContent = currentCmsData.productsTitle || "Our Organic Products";
    if (prodDesc) prodDesc.textContent = currentCmsData.productsDesc || "Discover our range of premium organic products — carefully sourced from Tamil Nadu farms and hygienically packed for your family.";

    // Render Product Grid
    const grid = document.getElementById('product-grid');
    if (grid) {
      grid.innerHTML = '';
      currentCmsData.products.forEach(function (product) {
        const article = document.createElement('article');
        article.className = 'product-card';
        article.setAttribute('data-category', product.category);
        article.setAttribute('data-name', product.name);
        article.setAttribute('data-desc', product.desc);
        article.setAttribute('data-price', product.price);

        const isBase64 = product.image && product.image.startsWith('data:image/');
        const imgStyle = isBase64 ? `style="background-image: url('${product.image}');"` : '';
        const imgClass = isBase64 ? '' : product.image;

        article.innerHTML = `
          <div class="product-image ${imgClass}" ${imgStyle} role="img" aria-label="${product.name}"></div>
          <div class="product-body">
            <span class="product-category">${getCategoryLabel(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.desc.split('.')[0]}.</p>
            <div class="product-footer">
              <span class="product-price">${product.price}</span>
              <button class="btn btn-sm btn-outline product-view-btn">View Details</button>
            </div>
          </div>
        `;
        grid.appendChild(article);
      });
    }

    // Reset filtering visual state if a category filter is active
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if (activeFilterBtn) {
      applyProductFilter(activeFilterBtn.getAttribute('data-filter'));
    }

    // 3. About Us Section
    const abLabel = document.getElementById('cms-about-label');
    const abTitle = document.getElementById('cms-about-title');
    const abStory1 = document.getElementById('cms-about-story-1');
    const abStory2 = document.getElementById('cms-about-story-2');
    const abMission = document.getElementById('cms-about-mission');
    const abVision = document.getElementById('cms-about-vision');
    const abSpecialList = document.getElementById('cms-about-special');

    if (abLabel) abLabel.textContent = currentCmsData.about.label;
    if (abTitle) abTitle.textContent = currentCmsData.about.title;
    if (abStory1) abStory1.textContent = currentCmsData.about.story1;
    if (abStory2) abStory2.textContent = currentCmsData.about.story2;
    if (abMission) abMission.textContent = currentCmsData.about.mission;
    if (abVision) abVision.textContent = currentCmsData.about.vision;
    if (abSpecialList) {
      abSpecialList.innerHTML = '';
      currentCmsData.about.special.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        abSpecialList.appendChild(li);
      });
    }

    // 4. Contact Us Section
    const ctLabel = document.getElementById('cms-contact-label');
    const ctTitle = document.getElementById('cms-contact-title');
    const ctDesc = document.getElementById('cms-contact-desc');
    const ctRegion = document.getElementById('cms-contact-region');
    const ctPhone = document.getElementById('cms-contact-phone');
    const ctEmail = document.getElementById('cms-contact-email');
    const ctAddress = document.getElementById('cms-contact-address');
    const ctHours = document.getElementById('cms-contact-hours');
    const ctWhatsapp = document.getElementById('cms-contact-whatsapp');

    if (ctLabel) ctLabel.textContent = currentCmsData.contact.label;
    if (ctTitle) ctTitle.textContent = currentCmsData.contact.title;
    if (ctDesc) ctDesc.textContent = currentCmsData.contact.desc;
    if (ctRegion) ctRegion.textContent = currentCmsData.contact.region;

    if (ctPhone) {
      ctPhone.textContent = currentCmsData.contact.phone;
      ctPhone.setAttribute('href', 'tel:' + currentCmsData.contact.phone.replace(/\s+/g, ''));
    }
    if (ctEmail) {
      ctEmail.textContent = currentCmsData.contact.email;
      ctEmail.setAttribute('href', 'mailto:' + currentCmsData.contact.email);
    }
    if (ctAddress) ctAddress.textContent = currentCmsData.contact.address;
    if (ctHours) ctHours.textContent = currentCmsData.contact.hours;
    if (ctWhatsapp) {
      ctWhatsapp.setAttribute('href', 'https://wa.me/' + currentCmsData.contact.whatsapp.replace(/\D/g, ''));
    }
  }

  function getCategoryLabel(cat) {
    const labels = {
      rice: "Organic Rice",
      millets: "Millets",
      pulses: "Pulses",
      spices: "Spices",
      oils: "Oils",
      produce: "Farm Produce",
      health: "Health Products"
    };
    return labels[cat] || cat;
  }

  // File to Base64 utility
  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function (error) { reject(error); };
    });
  }

  /* --- Navigation Controls --- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const header = document.getElementById('header');

  function closeNav() {
    if (!navToggle || !navMenu) return;
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  function openNav() {
    if (!navToggle || !navMenu) return;
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.contains('active');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  /* Smooth Scroll & Close Nav on Link Click */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeNav();
      closeModal();
      closeAdminConsole();

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Sticky Header Shadow */
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* --- Product Filtering --- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterEmpty = document.getElementById('filter-empty');

  function applyProductFilter(filter) {
    const productCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    productCards.forEach(function (card) {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (filterEmpty) {
      filterEmpty.hidden = visibleCount > 0;
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      applyProductFilter(filter);
    });
  });

  /* --- Product Quick-View Modal --- */
  const modal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPrice = document.getElementById('modal-price');
  const modalCategory = document.getElementById('modal-category');
  const modalImage = document.getElementById('modal-image');

  function openModal(card) {
    if (!modal) return;

    const name = card.getAttribute('data-name') || '';
    const desc = card.getAttribute('data-desc') || '';
    const price = card.getAttribute('data-price') || '';
    const categoryEl = card.querySelector('.product-category');
    const imageEl = card.querySelector('.product-image');

    if (modalTitle) modalTitle.textContent = name;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalPrice) modalPrice.textContent = price;
    if (modalCategory && categoryEl) modalCategory.textContent = categoryEl.textContent;

    if (modalImage && imageEl) {
      if (imageEl.style.backgroundImage) {
        modalImage.className = 'modal-image';
        modalImage.style.backgroundImage = imageEl.style.backgroundImage;
        modalImage.style.backgroundSize = 'cover';
        modalImage.style.backgroundPosition = 'center';
      } else {
        modalImage.style.backgroundImage = '';
        modalImage.className = 'modal-image ' + imageEl.className.replace('product-image ', '');
      }
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (!navMenu || !navMenu.classList.contains('active')) {
      document.body.classList.remove('nav-open');
    }
  }

  // Handle Dynamic Product Event Delegation
  const productGrid = document.getElementById('product-grid');
  if (productGrid) {
    productGrid.addEventListener('click', function (e) {
      const viewBtn = e.target.closest('.product-view-btn');
      if (viewBtn) {
        const card = viewBtn.closest('.product-card');
        if (card) openModal(card);
      }
    });
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  /* --- Contact Form Validation --- */
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  function showFormMessage(text, type) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = 'form-message show ' + type;
  }

  function clearFormErrors() {
    if (!contactForm) return;
    contactForm.querySelectorAll('.error').forEach(function (el) {
      el.classList.remove('error');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearFormErrors();

      const name = document.getElementById('name');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let isValid = true;
      let errorMsg = '';

      if (!name.value.trim()) {
        name.classList.add('error');
        isValid = false;
        errorMsg = 'Please enter your full name.';
      }
      if (!phone.value.trim() || phone.value.replace(/\D/g, '').length < 10) {
        phone.classList.add('error');
        isValid = false;
        errorMsg = errorMsg || 'Please enter a valid phone number (at least 10 digits).';
      }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        isValid = false;
        errorMsg = errorMsg || 'Please enter a valid email address.';
      }
      if (!message.value.trim()) {
        message.classList.add('error');
        isValid = false;
        errorMsg = errorMsg || 'Please enter your message.';
      }

      if (!isValid) {
        showFormMessage(errorMsg, 'error');
        return;
      }

      showFormMessage('Thank you! Your message has been received. We will get back to you soon.', 'success');
      contactForm.reset();
    });

    contactForm.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        this.classList.remove('error');
        if (formMessage) formMessage.className = 'form-message';
      });
    });
  }

  /* --- Admin Authentication & Controls --- */
  const adminLoginTrigger = document.getElementById('admin-login-trigger');
  const adminLoginModal = document.getElementById('admin-login-modal');
  const adminLoginClose = document.getElementById('admin-login-close');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminLoginError = document.getElementById('admin-login-error');
  const adminPasswordInput = document.getElementById('admin-password');

  const adminDashboard = document.getElementById('admin-dashboard');
  const adminDashboardClose = document.getElementById('admin-dashboard-close');
  const adminLogout = document.getElementById('admin-logout');
  const adminSaveAll = document.getElementById('admin-save-all');

  function openLoginModal() {
    if (!adminLoginModal) return;
    adminLoginModal.classList.add('active');
    adminLoginModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
    if (adminPasswordInput) {
      adminPasswordInput.value = '';
      adminPasswordInput.focus();
    }
  }

  function closeLoginModal() {
    if (!adminLoginModal) return;
    adminLoginModal.classList.remove('active');
    adminLoginModal.setAttribute('aria-hidden', 'true');
    if (adminLoginError) adminLoginError.style.display = 'none';
    document.body.classList.remove('nav-open');
  }

  if (adminLoginTrigger) {
    adminLoginTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      closeNav();
      openLoginModal();
    });
  }

  if (adminLoginClose) adminLoginClose.addEventListener('click', closeLoginModal);
  if (adminLoginModal) {
    adminLoginModal.addEventListener('click', function (e) {
      if (e.target === adminLoginModal) closeLoginModal();
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (adminPasswordInput.value === 'admin123') {
        closeLoginModal();
        openAdminConsole();
      } else {
        if (adminLoginError) {
          adminLoginError.textContent = 'Incorrect password. Try admin123';
          adminLoginError.style.display = 'block';
        }
      }
    });
  }

  /* --- Admin Panel Logic --- */
  let tempCmsData = {};
  let currentUploadedProdImage = ''; // Store temporary uploaded product image Base64

  function openAdminConsole() {
    if (!adminDashboard) return;
    tempCmsData = JSON.parse(JSON.stringify(currentCmsData)); // Clone working copy
    currentUploadedProdImage = '';
    populateAdminFields();
    renderAdminProductsList();
    adminDashboard.classList.add('active');
    adminDashboard.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeAdminConsole() {
    if (!adminDashboard) return;
    adminDashboard.classList.remove('active');
    adminDashboard.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  if (adminDashboardClose) adminDashboardClose.addEventListener('click', closeAdminConsole);
  if (adminLogout) {
    adminLogout.addEventListener('click', function () {
      closeAdminConsole();
    });
  }

  // Save changes handler
  if (adminSaveAll) {
    adminSaveAll.addEventListener('click', function () {
      // Gather data from input elements
      gatherAdminFields();
      
      // Update global store
      currentCmsData = JSON.parse(JSON.stringify(tempCmsData));
      localStorage.setItem('yugam_organics_cms_data', JSON.stringify(currentCmsData));
      
      // Rerender main site UI
      renderCmsData();
      closeAdminConsole();
      
      alert('CMS Settings saved successfully!');
    });
  }

  // Navigation tabs inside admin
  const adminNavBtns = document.querySelectorAll('.admin-nav-btn');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');

  adminNavBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');
      
      adminNavBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      
      adminTabPanes.forEach(function (pane) {
        if (pane.id === tabId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // Wire Hero Image Upload Input Listener
  const inputHeroImageFile = document.getElementById('input-hero-image-file');
  const heroImagePreview = document.getElementById('hero-image-preview');

  if (inputHeroImageFile) {
    inputHeroImageFile.addEventListener('change', async function () {
      if (this.files && this.files[0]) {
        try {
          const base64 = await fileToBase64(this.files[0]);
          tempCmsData.hero.image = base64;
          if (heroImagePreview) {
            heroImagePreview.style.backgroundImage = `url('${base64}')`;
            heroImagePreview.style.display = 'block';
          }
        } catch (err) {
          console.error(err);
          alert('Failed to read image file');
        }
      }
    });
  }

  // Wire Product Image Upload Input Listener
  const inputProdImageFile = document.getElementById('input-prod-image-file');
  const prodImagePreview = document.getElementById('prod-image-preview');

  if (inputProdImageFile) {
    inputProdImageFile.addEventListener('change', async function () {
      if (this.files && this.files[0]) {
        try {
          const base64 = await fileToBase64(this.files[0]);
          currentUploadedProdImage = base64;
          if (prodImagePreview) {
            prodImagePreview.style.backgroundImage = `url('${base64}')`;
            prodImagePreview.style.display = 'block';
          }
        } catch (err) {
          console.error(err);
          alert('Failed to read image file');
        }
      }
    });
  }

  // Populate form fields from object
  function populateAdminFields() {
    // Hero texts
    document.getElementById('input-hero-badge').value = tempCmsData.hero.badge || '';
    document.getElementById('input-hero-title').value = tempCmsData.hero.title || '';
    document.getElementById('input-hero-subtitle').value = tempCmsData.hero.subtitle || '';
    document.getElementById('input-hero-btn-primary-text').value = tempCmsData.hero.btnPrimaryText || '';
    document.getElementById('input-hero-btn-primary-link').value = tempCmsData.hero.btnPrimaryLink || '';
    document.getElementById('input-hero-btn-secondary-text').value = tempCmsData.hero.btnSecondaryText || '';
    document.getElementById('input-hero-btn-secondary-link').value = tempCmsData.hero.btnSecondaryLink || '';

    // Hero image preview
    if (inputHeroImageFile) inputHeroImageFile.value = '';
    if (heroImagePreview) {
      if (tempCmsData.hero.image) {
        heroImagePreview.style.backgroundImage = `url('${tempCmsData.hero.image}')`;
        heroImagePreview.style.display = 'block';
      } else {
        heroImagePreview.style.backgroundImage = '';
        heroImagePreview.style.display = 'none';
      }
    }

    // About Us
    document.getElementById('input-about-label').value = tempCmsData.about.label || '';
    document.getElementById('input-about-title').value = tempCmsData.about.title || '';
    document.getElementById('input-about-story-1').value = tempCmsData.about.story1 || '';
    document.getElementById('input-about-story-2').value = tempCmsData.about.story2 || '';
    document.getElementById('input-about-mission').value = tempCmsData.about.mission || '';
    document.getElementById('input-about-vision').value = tempCmsData.about.vision || '';
    document.getElementById('input-about-special').value = (tempCmsData.about.special || []).join('\n');

    // Contact
    document.getElementById('input-contact-label').value = tempCmsData.contact.label || '';
    document.getElementById('input-contact-title').value = tempCmsData.contact.title || '';
    document.getElementById('input-contact-desc').value = tempCmsData.contact.desc || '';
    document.getElementById('input-contact-region').value = tempCmsData.contact.region || '';
    document.getElementById('input-contact-phone').value = tempCmsData.contact.phone || '';
    document.getElementById('input-contact-email').value = tempCmsData.contact.email || '';
    document.getElementById('input-contact-address').value = tempCmsData.contact.address || '';
    document.getElementById('input-contact-hours').value = tempCmsData.contact.hours || '';
    document.getElementById('input-contact-whatsapp').value = tempCmsData.contact.whatsapp || '';
  }

  // Gather form values back into tempCmsData (excluding images which are updated dynamically via file events)
  function gatherAdminFields() {
    // Hero texts
    tempCmsData.hero.badge = document.getElementById('input-hero-badge').value;
    tempCmsData.hero.title = document.getElementById('input-hero-title').value;
    tempCmsData.hero.subtitle = document.getElementById('input-hero-subtitle').value;
    tempCmsData.hero.btnPrimaryText = document.getElementById('input-hero-btn-primary-text').value;
    tempCmsData.hero.btnPrimaryLink = document.getElementById('input-hero-btn-primary-link').value;
    tempCmsData.hero.btnSecondaryText = document.getElementById('input-hero-btn-secondary-text').value;
    tempCmsData.hero.btnSecondaryLink = document.getElementById('input-hero-btn-secondary-link').value;

    // About Us
    tempCmsData.about.label = document.getElementById('input-about-label').value;
    tempCmsData.about.title = document.getElementById('input-about-title').value;
    tempCmsData.about.story1 = document.getElementById('input-about-story-1').value;
    tempCmsData.about.story2 = document.getElementById('input-about-story-2').value;
    tempCmsData.about.mission = document.getElementById('input-about-mission').value;
    tempCmsData.about.vision = document.getElementById('input-about-vision').value;
    
    const specialRaw = document.getElementById('input-about-special').value;
    tempCmsData.about.special = specialRaw.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    // Contact
    tempCmsData.contact.label = document.getElementById('input-contact-label').value;
    tempCmsData.contact.title = document.getElementById('input-contact-title').value;
    tempCmsData.contact.desc = document.getElementById('input-contact-desc').value;
    tempCmsData.contact.region = document.getElementById('input-contact-region').value;
    tempCmsData.contact.phone = document.getElementById('input-contact-phone').value;
    tempCmsData.contact.email = document.getElementById('input-contact-email').value;
    tempCmsData.contact.address = document.getElementById('input-contact-address').value;
    tempCmsData.contact.hours = document.getElementById('input-contact-hours').value;
    tempCmsData.contact.whatsapp = document.getElementById('input-contact-whatsapp').value;
  }

  /* --- Products Management CMS (CRUD) --- */
  const btnAddProduct = document.getElementById('btn-add-product');
  const productEditorFormWrap = document.getElementById('product-editor-form-wrap');
  const productEditorTitle = document.getElementById('product-editor-title');
  const btnCancelProduct = document.getElementById('btn-cancel-product');
  const btnSaveProduct = document.getElementById('btn-save-product');
  const adminProductsList = document.getElementById('admin-products-list');

  const inputProdName = document.getElementById('input-prod-name');
  const inputProdCategory = document.getElementById('input-prod-category');
  const inputProdPrice = document.getElementById('input-prod-price');
  const inputProdImage = document.getElementById('input-prod-image');
  const editProductIndex = document.getElementById('edit-product-index');
  const inputProdDesc = document.getElementById('input-prod-desc');

  function renderAdminProductsList() {
    if (!adminProductsList) return;
    adminProductsList.innerHTML = '';
    
    tempCmsData.products.forEach(function (product, idx) {
      const item = document.createElement('div');
      item.className = 'admin-product-item';

      const isBase64 = product.image && product.image.startsWith('data:image/');
      const thumbStyle = isBase64 ? `style="background-image: url('${product.image}');"` : '';
      const thumbClass = isBase64 ? '' : product.image;

      item.innerHTML = `
        <div class="admin-prod-info">
          <div class="admin-prod-thumb ${thumbClass}" ${thumbStyle}></div>
          <div class="admin-prod-meta">
            <h5>${product.name}</h5>
            <span>${getCategoryLabel(product.category)}</span>
          </div>
        </div>
        <div class="admin-prod-price">${product.price}</div>
        <div class="admin-prod-actions">
          <button class="btn btn-sm btn-outline edit-btn" data-index="${idx}">Edit</button>
          <button class="btn btn-sm btn-outline delete-btn" data-index="${idx}" style="color: #dc3545; border-color: #dc3545;">Delete</button>
        </div>
      `;
      adminProductsList.appendChild(item);
    });

    // Wire up dynamic action buttons
    adminProductsList.querySelectorAll('.edit-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'), 10);
        showProductEditor(index);
      });
    });

    adminProductsList.querySelectorAll('.delete-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'), 10);
        if (confirm('Are you sure you want to delete this product?')) {
          tempCmsData.products.splice(index, 1);
          renderAdminProductsList();
        }
      });
    });
  }

  function showProductEditor(index = -1) {
    if (!productEditorFormWrap) return;
    
    if (inputProdImageFile) inputProdImageFile.value = '';
    
    if (index >= 0) {
      // Edit mode
      const prod = tempCmsData.products[index];
      productEditorTitle.textContent = "Edit Product: " + prod.name;
      editProductIndex.value = index;
      inputProdName.value = prod.name;
      inputProdCategory.value = prod.category;
      inputProdPrice.value = prod.price;
      inputProdDesc.value = prod.desc;

      const isBase64 = prod.image && prod.image.startsWith('data:image/');
      if (isBase64) {
        currentUploadedProdImage = prod.image;
        if (prodImagePreview) {
          prodImagePreview.style.backgroundImage = `url('${prod.image}')`;
          prodImagePreview.style.display = 'block';
        }
        inputProdImage.value = 'product-img-rice'; // Reset fallback select
      } else {
        currentUploadedProdImage = '';
        if (prodImagePreview) {
          prodImagePreview.style.backgroundImage = '';
          prodImagePreview.style.display = 'none';
        }
        inputProdImage.value = prod.image || 'product-img-rice';
      }
    } else {
      // Add mode
      productEditorTitle.textContent = "Add New Product";
      editProductIndex.value = "";
      inputProdName.value = "";
      inputProdCategory.value = "rice";
      inputProdPrice.value = "";
      inputProdImage.value = "product-img-rice";
      inputProdDesc.value = "";
      currentUploadedProdImage = '';
      if (prodImagePreview) {
        prodImagePreview.style.backgroundImage = '';
        prodImagePreview.style.display = 'none';
      }
    }
    productEditorFormWrap.style.display = 'block';
    productEditorFormWrap.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function hideProductEditor() {
    if (productEditorFormWrap) productEditorFormWrap.style.display = 'none';
  }

  if (btnAddProduct) {
    btnAddProduct.addEventListener('click', function () {
      showProductEditor(-1);
    });
  }
  if (btnCancelProduct) {
    btnCancelProduct.addEventListener('click', function () {
      hideProductEditor();
    });
  }

  if (btnSaveProduct) {
    btnSaveProduct.addEventListener('click', function () {
      const name = inputProdName.value.trim();
      const cat = inputProdCategory.value;
      const price = inputProdPrice.value.trim();
      const desc = inputProdDesc.value.trim();
      const indexStr = editProductIndex.value;

      if (!name || !price || !desc) {
        alert('Please fill out all product fields.');
        return;
      }

      // Check if custom uploaded image exists; otherwise fall back to dropdown selection
      const image = currentUploadedProdImage ? currentUploadedProdImage : inputProdImage.value;

      const productObj = { name, category: cat, price, image, desc };

      if (indexStr !== "") {
        // Save edit
        const index = parseInt(indexStr, 10);
        tempCmsData.products[index] = productObj;
      } else {
        // Add new
        tempCmsData.products.push(productObj);
      }

      hideProductEditor();
      renderAdminProductsList();
    });
  }

  /* Global keyboard navigation / Esc close */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeNav();
      closeLoginModal();
      closeAdminConsole();
    }
  });

  // Start CMS Initialization
  initCms();

})();
