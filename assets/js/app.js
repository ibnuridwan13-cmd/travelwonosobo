/* =========================================================================
   WONOSOBO TRANS — LOGIKA HALAMAN
   Data usaha diambil dari assets/js/config.js. File ini cukup jarang diubah.
   ========================================================================= */
(function () {
  "use strict";

  var cfg = window.WONOSOBO_TRANS_CONFIG;
  if (!cfg) return;

  document.documentElement.classList.add("js-ready");

  /* ------------------------------ helper ------------------------------ */
  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  };
  var icon = function (name, className) {
    return '<svg class="icon ' + (className || "") + '" aria-hidden="true"><use href="#icon-' + name + '"></use></svg>';
  };
  var esc = function (value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  };
  var rupiah = function (number) {
    return "Rp" + new Intl.NumberFormat("id-ID").format(number);
  };
  var WA_NUMBER = String(cfg.contact.whatsapp || "").replace(/\D/g, "");

  var waUrl = function (message) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message || "");
  };
  var fillTemplate = function (template, values) {
    return String(template || "").replace(/\{(\w+)\}/g, function (match, key) {
      return Object.prototype.hasOwnProperty.call(values, key) && values[key] != null
        ? String(values[key])
        : "";
    });
  };
  var generalMessage = function () {
    return fillTemplate(cfg.waTemplates.general, { brand: cfg.brand.name });
  };
  var routeMessage = function (route) {
    return fillTemplate(cfg.waTemplates.route, {
      brand: cfg.brand.name,
      rute: "Wonosobo → " + route.to
    });
  };
  var findRoute = function (destinationName) {
    return (cfg.routes || []).filter(function (route) { return route.to === destinationName; })[0] || null;
  };

  /* ------------------- isi teks dari konfigurasi --------------------- */
  $$("[data-config]").forEach(function (element) {
    var path = element.getAttribute("data-config").split(".");
    var value = cfg;
    path.forEach(function (key) {
      value = value && typeof value === "object" ? value[key] : undefined;
    });
    if (typeof value === "string" || typeof value === "number") {
      element.textContent = value;
    }
  });

  /* --------------------------- logo / gambar ------------------------- */
  if (cfg.brand.logoImage) {
    $$("[data-logo]").forEach(function (wrapper) {
      wrapper.innerHTML = '<img src="' + esc(cfg.brand.logoImage) + '" alt="' + esc(cfg.brand.logoAlt || cfg.brand.name) + '">';
    });
  }

  var heroImage = $(".hero__photo img");
  if (heroImage && cfg.hero && cfg.hero.image) {
    heroImage.src = cfg.hero.image;
    heroImage.alt = cfg.hero.imageAlt || cfg.hero.image;
    heroImage.setAttribute("fetchpriority", "high");
  }

  var aboutImage = $(".about__media > img");
  if (aboutImage && cfg.about && cfg.about.image) {
    aboutImage.src = cfg.about.image;
    aboutImage.alt = cfg.about.imageAlt || cfg.about.image;
  }

  var aboutCopy = $("#aboutCopy");
  if (aboutCopy && cfg.about && cfg.about.paragraphs) {
    aboutCopy.innerHTML = cfg.about.paragraphs.map(function (paragraph) {
      return "<p>" + esc(paragraph) + "</p>";
    }).join("");
  }

  /* ---------------------- tautan WhatsApp umum ----------------------- */
  $$('[data-wa="contact"]').forEach(function (link) {
    link.href = waUrl(generalMessage());
    link.setAttribute("aria-label", "Chat WhatsApp " + cfg.brand.name);
  });

  /* --------------------------- DATA ARMADA -------------------------- */
  var fleetImages = (cfg.fleet && cfg.fleet.images) || [];
  var fleetMain = $("#fleetMainImage");
  var fleetThumbs = $("#fleetThumbs");

  if (fleetMain && fleetImages.length) {
    fleetMain.src = fleetImages[0].src;
    fleetMain.alt = fleetImages[0].alt || cfg.fleet.name;
  }

  if (fleetThumbs && fleetImages.length) {
    fleetThumbs.innerHTML = fleetImages.map(function (image, index) {
      return (
        '<button type="button" class="fleet__thumb' + (index === 0 ? " is-active" : "") + '"' +
        ' data-index="' + index + '" aria-pressed="' + (index === 0 ? "true" : "false") + '"' +
        ' aria-label="Tampilkan foto: ' + esc(image.alt || cfg.fleet.name) + '">' +
        '<img src="' + esc(image.src) + '" alt="" width="320" height="240" loading="lazy" decoding="async">' +
        "</button>"
      );
    }).join("");

    fleetThumbs.addEventListener("click", function (event) {
      var button = event.target.closest(".fleet__thumb");
      if (!button || !fleetMain) return;
      var image = fleetImages[Number(button.getAttribute("data-index"))];
      if (!image) return;
      fleetMain.src = image.src;
      fleetMain.alt = image.alt || cfg.fleet.name;
      $$(".fleet__thumb", fleetThumbs).forEach(function (item) {
        var isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    });
  }

  var fleetSpecs = $("#fleetSpecs");
  if (fleetSpecs && cfg.fleet && cfg.fleet.specs) {
    fleetSpecs.innerHTML = cfg.fleet.specs.map(function (spec) {
      return (
        '<li class="spec">' +
        '<span class="spec__icon">' + icon(spec.icon || "check") + "</span>" +
        '<span class="spec__text"><span class="spec__label">' + esc(spec.label) + "</span>" +
        "<strong>" + esc(spec.value) + "</strong></span>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------------------------- RUTE & HARGA ------------------------- */
  var routeList = $("#routeList");
  if (routeList) {
    routeList.innerHTML = (cfg.routes || []).map(function (route) {
      return (
        '<article class="route-card">' +
        '<p class="route-card__origin">' + icon("pin") + "Dari Wonosobo" + icon("arrow-right", "route-card__arrow") + "</p>" +
        '<h3 class="route-card__title">' + esc(route.to) + "</h3>" +
        '<p class="route-card__desc">' + esc(route.description) + "</p>" +
        '<div class="route-card__foot">' +
        '<p class="price"><span class="price__value">' + rupiah(route.price) + "</span>" +
        '<span class="price__unit">/ penumpang</span></p>' +
        '<a class="btn btn-primary btn-sm" href="' + waUrl(routeMessage(route)) + '" target="_blank" rel="noopener noreferrer" ' +
        'aria-label="Pesan rute Wonosobo ke ' + esc(route.to) + ' via WhatsApp">Pesan Sekarang</a>' +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------------------------- DESTINASI ---------------------------- */
  var destinationList = $("#destinationList");
  if (destinationList) {
    var destinationCards = (cfg.destinations || []).map(function (destination) {
      var route = findRoute(destination.routeTo || destination.name);
      var priceLabel = route ? "Mulai " + rupiah(route.price) : "Harga via WhatsApp";
      var bookingHref = route ? waUrl(routeMessage(route)) : waUrl(generalMessage());
      return (
        '<article class="dest-card">' +
        '<figure class="dest-card__media">' +
        '<img src="' + esc(destination.image) + '" alt="' + esc(destination.alt) + '" width="960" height="600" loading="lazy" decoding="async">' +
        '<figcaption class="dest-card__price">' + priceLabel + "</figcaption>" +
        "</figure>" +
        '<div class="dest-card__body">' +
        "<h3>" + esc(destination.name) + "</h3>" +
        "<p>" + esc(destination.description) + "</p>" +
        '<a class="btn btn-outline btn-sm" href="' + bookingHref + '" target="_blank" rel="noopener noreferrer" ' +
        'aria-label="Pesan travel ke ' + esc(destination.name) + ' via WhatsApp">Pesan ' +
        icon("arrow-up-right") + "</a>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    destinationList.innerHTML =
      destinationCards +
      '<a class="dest-card dest-card--cta" href="#rute">' +
      '<span class="dest-card__cta-icon">' + icon("van") + "</span>" +
      "<h3>Masih ada kota lain?</h3>" +
      "<p>Lihat seluruh rute dan harga keberangkatan dari Wonosobo.</p>" +
      '<span class="dest-card__cta-link">Lihat Rute &amp; Harga' + icon("arrow-right") + "</span>" +
      "</a>";
  }

  /* ---------------------------- TESTIMONI ---------------------------- */
  var testimonialList = $("#testimonialList");
  if (testimonialList) {
    testimonialList.innerHTML = (cfg.testimonials || []).map(function (item) {
      var initial = String(item.name || "?").trim().charAt(0).toUpperCase();
      return (
        '<li class="testimonial">' +
        '<div class="testimonial__top">' +
        '<span class="testimonial__quote">' + icon("quote") + "</span>" +
        '<span class="pill pill--soft">Contoh</span>' +
        "</div>" +
        '<p class="testimonial__text">&ldquo;' + esc(item.quote) + "&rdquo;</p>" +
        '<div class="testimonial__person">' +
        '<span class="avatar" aria-hidden="true">' + esc(initial) + "</span>" +
        "<span><strong>" + esc(item.name) + "</strong><span>" + esc(item.origin) + "</span></span>" +
        "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* -------------------------------- FAQ ------------------------------ */
  var faqList = $("#faqList");
  if (faqList) {
    faqList.innerHTML = (cfg.faq || []).map(function (item, index) {
      return (
        '<details class="faq-item"' + (index === 0 ? " open" : "") + ">" +
        "<summary><span>" + esc(item.question) + "</span>" + icon("chevron", "faq-item__icon") + "</summary>" +
        '<div class="faq-item__answer"><p>' + esc(item.answer) + "</p></div>" +
        "</details>"
      );
    }).join("");

    // Satu pertanyaan terbuka dalam satu waktu.
    faqList.addEventListener("click", function (event) {
      var summary = event.target.closest("summary");
      if (!summary) return;
      var current = summary.parentElement;
      $$("details", faqList).forEach(function (item) {
        if (item !== current) item.open = false;
      });
    });
  }

  /* ------------------------- RUTE DI FOOTER -------------------------- */
  var footerRoutes = $("#footerRoutes");
  if (footerRoutes) {
    footerRoutes.innerHTML = (cfg.routes || []).slice(0, 5).map(function (route) {
      return '<li><a href="#rute">Wonosobo → ' + esc(route.to) + "</a></li>";
    }).join("");
  }

  /* ---------------------------- FORM BOOKING ------------------------- */
  var form = $("#bookingForm");
  var routeSelect = $("#fieldRute");
  var passengerSelect = $("#fieldPenumpang");

  if (routeSelect) {
    routeSelect.innerHTML =
      '<option value="">Pilih tujuan</option>' +
      (cfg.routes || []).map(function (route) {
        return '<option value="' + esc(route.to) + '">Wonosobo → ' + esc(route.to) + " — " + rupiah(route.price) + "</option>";
      }).join("");
  }

  if (passengerSelect) {
    var passengerOptions = "";
    for (var pax = 1; pax <= 10; pax += 1) {
      passengerOptions += '<option value="' + pax + '">' + pax + " penumpang</option>";
    }
    passengerSelect.innerHTML = passengerOptions;
  }

  var today = new Date();
  var isoToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  var dateInput = $("#fieldTanggal");
  if (dateInput) dateInput.min = isoToday;

  var formatDate = function (isoValue) {
    if (!isoValue) return "";
    var parts = isoValue.split("-");
    if (parts.length !== 3) return isoValue;
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  var setFieldError = function (fieldName, hasError) {
    var field = $('[data-field="' + fieldName + '"]');
    if (!field) return;
    field.classList.toggle("is-invalid", hasError);
    var input = field.querySelector("input, select");
    if (input) {
      if (hasError) input.setAttribute("aria-invalid", "true");
      else input.removeAttribute("aria-invalid");
    }
  };

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var feedback = $("#bookingFeedback");
      var namaInput = $("#fieldNama");
      var teleponInput = $("#fieldTelepon");
      var nama = namaInput ? namaInput.value.trim() : "";
      var telepon = teleponInput ? teleponInput.value.trim() : "";
      var teleponDigits = telepon.replace(/\D/g, "");
      var ruteValue = routeSelect ? routeSelect.value : "";
      var tanggalValue = dateInput ? dateInput.value : "";
      var penumpangValue = passengerSelect ? passengerSelect.value : "";

      var errors = {
        nama: nama.length < 2,
        telepon: !/^(?:62|0)8\d{7,12}$/.test(teleponDigits),
        rute: !ruteValue,
        tanggal: !tanggalValue || tanggalValue < isoToday,
        penumpang: !penumpangValue
      };

      Object.keys(errors).forEach(function (key) { setFieldError(key, errors[key]); });

      var firstInvalid = Object.keys(errors).filter(function (key) { return errors[key]; })[0];
      if (firstInvalid) {
        if (feedback) feedback.textContent = "Mohon lengkapi data perjalanan Anda terlebih dahulu.";
        var invalidField = $('[data-field="' + firstInvalid + '"]');
        var focusTarget = invalidField && invalidField.querySelector("input, select");
        if (focusTarget) focusTarget.focus();
        return;
      }

      var message = fillTemplate(cfg.waTemplates.booking, {
        brand: cfg.brand.name,
        nama: nama,
        telepon: telepon,
        rute: "Wonosobo → " + ruteValue,
        tanggal: formatDate(tanggalValue),
        penumpang: penumpangValue + " penumpang"
      });
      var url = waUrl(message);
      window.open(url, "_blank", "noopener");

      if (feedback) {
        feedback.innerHTML = "";
        feedback.append("Membuka WhatsApp… ");
        var fallback = document.createElement("a");
        fallback.href = url;
        fallback.target = "_blank";
        fallback.rel = "noopener noreferrer";
        fallback.textContent = "Jika tidak terbuka otomatis, klik di sini.";
        feedback.append(fallback);
      }
    });

    $$("input, select", form).forEach(function (input) {
      input.addEventListener("input", function () {
        var field = input.closest("[data-field]");
        if (field && field.classList.contains("is-invalid")) {
          field.classList.remove("is-invalid");
          input.removeAttribute("aria-invalid");
        }
      });
    });
  }

  /* ----------------------- NAVIGASI MOBILE --------------------------- */
  var header = $("#siteHeader");
  var navToggle = $("#navToggle");
  var nav = $("#primaryNav");

  var closeNav = function () {
    if (!header || !navToggle) return;
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka menu navigasi");
  };

  if (header && navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
    });

    $$("a", nav).forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  /* -------------------- HEADER SAAT SCROLL --------------------------- */
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* --------------------------- SCROLLSPY ----------------------------- */
  var navLinks = $$(".nav__link");
  var spySections = navLinks
    .map(function (link) { return document.getElementById(link.getAttribute("href").slice(1)); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && spySections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spySections.forEach(function (section) { spy.observe(section); });
  }

  /* ------------------------ ANIMASI RINGAN --------------------------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealItems = $$("[data-reveal]");

  if (!reduceMotion && "IntersectionObserver" in window && revealItems.length) {
    revealItems.forEach(function (item) { item.classList.add("reveal"); });
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealItems.forEach(function (item) { revealObserver.observe(item); });

    // Jaring pengaman: bila observer tidak berjalan (mis. tab tidak digambar),
    // konten tetap ditampilkan setelah beberapa detik.
    window.setTimeout(function () {
      revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    }, 2500);
  }
})();
