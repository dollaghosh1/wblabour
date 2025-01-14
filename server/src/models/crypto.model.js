function decryptData(encryptedData, secretKey) {
    const algorithm = "aes-256-cbc";
    const key = crypto.createHash("sha256").update(secretKey).digest("base64").substr(0, 32);
    const iv = Buffer.from(encryptedData.iv, "hex");
    const encryptedText = Buffer.from(encryptedData.ciphertext, "hex");
  
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return JSON.parse(decrypted.toString());
  }