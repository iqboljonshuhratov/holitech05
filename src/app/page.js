"use client";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";

export default function Home() {
  const handleClose = () => setOpen(false);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <Box
      className="flex  justify-between items-center justify-between"
      style={{ height: "100%" }}
    >
      <div
        className="contend pt-[70px] max-w-[700px] flex flex-col  justify-center"
        style={{ width: "100%" }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: "46px",
            fontFamily: '"Montserrat", Arial, sans-serif',
            // lineHeight: 1.55,
            fontWeight: 700,
            // textAlign: "center", // Agar o‘rtaga joylash kerak bo‘lsa
            border: "solid transparent",
            marginBottom: "20px",
          }}
        >
          Oxirgi qadam qoldi!
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "26px",
            fontFamily: '"Montserrat", Arial, sans-serif',
            fontWeight: 500,
            marginBottom: "20px",
          }}
        >
          Masterklassda qatnashish uchun, qizil <br /> tugmani bosib kanalga
          obuna bo’ling
        </Typography>
        <img
          width={"294px"}
          src="https://optim.tildacdn.one/tild3034-3531-4831-b464-626563663964/-/resize/588x/-/format/webp/noroot.png"
          alt="img"
        />

        <div>
          <Box
            className="text-center"
            sx={{ display: "flex", gap: "20px", alignContent: "center" }}
          >
            <Button
              href="https://t.me/+mha03k1e_Rs4YThi"
              target="_blank"
              sx={{
                marginBottom: "20px",
                color: "#ffffff",

                width: "321px",
                height: "70px",
                fontSize: "18px",
                fontFamily: `"Montserrat", Arial, sans-serif`,
                lineHeight: 1.55,
                fontWeight: 600,
                borderRadius: "18px",
                backgroundImage:
                  "linear-gradient(0.283turn, rgba(192, 70, 70, 1) 0%, rgba(255, 99, 99, 1) 50%, rgba(192, 70, 70, 1) 100%)",
                borderColor: "transparent",
                borderStyle: "solid",
                transition:
                  "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
                boxShadow: "0px 5px 0px 0px rgba(126, 33, 33, 1)",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(0.283turn, rgba(172, 50, 50, 1) 0%, rgba(235, 79, 79, 1) 50%, rgba(172, 50, 50, 1) 100%)",
                },
              }}
              variant="contained"
            >
              OBUNA BO‘LISH
            </Button>
          </Box>
        </div>
      </div>
      <Box sx={{ width: "407px", height: "488px", padding: "40px 0 0 0" }}>
        <img
          sx={{ width: "407px", height: "auto" }}
          src="https://holitechb.netlify.app/2.png"
          alt="man"
        />{" "}
      </Box>
    </Box>
  );
}
