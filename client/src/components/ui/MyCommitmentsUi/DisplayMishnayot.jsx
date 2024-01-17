import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import { Typography } from '@mui/joy';
import { useState } from 'react';

import './css/displayMishnayot.css'


function DisplayMishnayot({ mishnayot, open, setOpen }) {
    const [fontSize, setFontSize] = useState(18)

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ModalDialog
                color="neutral"
                layout="center"
                size="lg"
                variant="soft"
                sx={{ overflow: 'scroll' }}
            >
                <ModalClose />
                <Typography fontSize={fontSize}>
                    <div className='btn-size-container'>
                        <span className='text-size-btn' onClick={() => setFontSize(fontSize + 2)}> +</span>
                        <span className='text-size-btn' onClick={() => setFontSize(fontSize - 2)}> -</span>

                    </div>
                    {mishnayot.map((episode, index) => {
                        return (
                            <div key={index} >
                                <h2>פרק {index + 1}</h2>
                                {episode.map((mishnah, index) => {
                                    return (
                                        <div key={index} >

                                            <h3>משנה {index + 1}</h3>
                                            <p>{mishnah}</p>

                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Typography>
            </ModalDialog>
        </Modal>
    )
} export default DisplayMishnayot;