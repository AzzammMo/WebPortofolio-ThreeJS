import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Azzam",
          from_email: form.email,
          to_email: "adinsjhay10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          // Tampilkan pesan sukses menggunakan SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Pesan Terkirim!',
            text: 'Terima kasih. Saya akan segera menghubungi Anda kembali.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#1DBF73', // Ubah warna tombol OK di sini
            customClass: {
              confirmButton: 'my-confirm-button', // Tambahkan kelas khusus jika diperlukan
            },
          });

          // Reset form setelah berhasil
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          // Tampilkan pesan error menggunakan SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ahh, terjadi kesalahan. Silakan coba lagi. Error: ${error.text}`,
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF3D3D', // Ubah warna tombol OK di sini
            customClass: {
              confirmButton: 'my-confirm-button', // Tambahkan kelas khusus jika diperlukan
            },
          });
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>KONTAK</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nama</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan Namamu"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan Emailmu"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Pesan</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Masukkan Pesan'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
